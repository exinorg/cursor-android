# Remote Control — phone → Cursor on your PC

VibeCursor stays all-in-one in **Local** mode (the agent runs inside the phone). In **Remote** mode your prompts go to a tiny HTTP listener on your PC or VPS, where `cursor-agent` does the work with the computer's full power and projects; the answer streams back to the phone. The PC must stay on and awake.

## 1. Start the listener on the PC

Requirements: Node 18+, `cursor-agent` (or `agent`) in `PATH` and already logged in.

```bash
# copy docs/remote-listener.mjs anywhere, then:
export VIBE_RC_KEY='a-secret-of-your-choice'   # optional, same value in the app
export VIBE_RC_PORT=8787
node remote-listener.mjs
```

By default it listens on `127.0.0.1` only. To expose it on your LAN set `VIBE_RC_HOST=0.0.0.0` — then a key is **required**: whoever reaches that port can run the agent on your machine.

Endpoints: `GET /health` · `POST /prompt` `{ text, sessionId? }` (streams NDJSON from `cursor-agent -p … --output-format stream-json`) · `POST /cancel`. Auth: `Authorization: Bearer <VIBE_RC_KEY>`.

## 2. Reach it from the phone

- **USB**: `adb reverse tcp:8787 tcp:8787`, then use `http://127.0.0.1:8787` in the app.
- **Network**: put it behind an HTTPS tunnel (`cloudflared tunnel --url http://127.0.0.1:8787`, or `tailscale serve 8787`) and use that `https://…` URL. Plain `http://` to a LAN IP is blocked by the app's WebView.

## 3. Switch the app

**Remote** tab → *Remote (PC / VPS)* → address → API key (if set) → **Test connection** → save. Every prompt now runs on the PC; flip back to *Local* any time. A running prompt can be cancelled from the phone.

## Notes

- This is our own HTTP bridge to `cursor-agent`, **not** Cursor's cloud Background Agents.
- Files and Preview in the app still show the phone's local projects; the agent works in the directory where you started the listener.
- Keep the listener off the public internet unless it's behind a key and HTTPS.
