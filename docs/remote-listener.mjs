#!/usr/bin/env node
/**
 * Tiny HTTP bridge: phone → cursor-agent on this PC.
 * Usage: VIBE_RC_PORT=8787 VIBE_RC_KEY=secret node remote-listener.mjs
 *
 * Binds to 127.0.0.1 by default (USB `adb reverse` or a local HTTPS tunnel reach it).
 * To expose it on the LAN set VIBE_RC_HOST=0.0.0.0 — a key is then required, because
 * whoever reaches this port can run the agent on this machine.
 */
import http from 'node:http';
import { spawn } from 'node:child_process';
import { createInterface } from 'node:readline';

const PORT = Number(process.env.VIBE_RC_PORT || 8787);
const KEY = String(process.env.VIBE_RC_KEY || '').trim();
const AGENT = process.env.VIBE_RC_AGENT || 'cursor-agent';
const HOST = process.env.VIBE_RC_HOST || '127.0.0.1';
let child = null;

if (HOST !== '127.0.0.1' && HOST !== 'localhost' && !KEY && process.env.VIBE_RC_INSECURE !== '1') {
  console.error('[vibe-rc] refusing to listen on ' + HOST + ' without VIBE_RC_KEY (set VIBE_RC_INSECURE=1 to override)');
  process.exit(1);
}

function auth(req) {
  if (!KEY) return true;
  const h = req.headers.authorization || '';
  return h === 'Bearer ' + KEY;
}

function json(res, code, obj) {
  const b = JSON.stringify(obj);
  res.writeHead(code, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
  res.end(b);
}

function cancel() {
  if (child) {
    try { child.kill('SIGTERM'); } catch (_) {}
    child = null;
  }
}

const server = http.createServer(async (req, res) => {
  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type,Authorization,X-Vibe-Client',
    });
    return res.end();
  }
  if (!auth(req)) return json(res, 401, { ok: false, error: 'unauthorized' });

  const url = new URL(req.url || '/', 'http://127.0.0.1');
  if (req.method === 'GET' && url.pathname === '/health') {
    return json(res, 200, { ok: true, agent: AGENT, version: '1' });
  }
  if (req.method === 'POST' && url.pathname === '/cancel') {
    cancel();
    return json(res, 200, { ok: true });
  }
  if (req.method === 'POST' && url.pathname === '/prompt') {
    let body = '';
    for await (const chunk of req) body += chunk;
    let data;
    try { data = JSON.parse(body || '{}'); } catch (_) { return json(res, 400, { error: 'bad_json' }); }
    const text = String(data.text || '').trim();
    if (!text) return json(res, 400, { error: 'empty' });
    cancel();
    const args = ['-p', text, '--output-format', 'stream-json'];
    if (data.sessionId) args.push('--resume', String(data.sessionId));
    res.writeHead(200, {
      'Content-Type': 'application/x-ndjson',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'no-store',
    });
    child = spawn(AGENT, args, { stdio: ['ignore', 'pipe', 'pipe'] });
    const rl = createInterface({ input: child.stdout });
    rl.on('line', (line) => { try { res.write(line + '\n'); } catch (_) {} });
    child.stderr.on('data', () => {});
    child.on('close', (code) => {
      try { res.write(JSON.stringify({ type: 'done', code }) + '\n'); } catch (_) {}
      try { res.end(); } catch (_) {}
      child = null;
    });
    req.on('close', () => cancel());
    return;
  }
  json(res, 404, { error: 'not_found' });
});

server.listen(PORT, HOST, () => {
  console.log('[vibe-rc] listening http://' + HOST + ':' + PORT + (KEY ? ' (auth on)' : ' (no auth)'));
});
