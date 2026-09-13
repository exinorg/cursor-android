# Cursor for Android (unofficial) — VibeCursor 2

<p align="center">
  <img src="assets/logo.jpg" alt="VibeAgent — unofficial Cursor AI for Android logo" width="180" height="180" />
</p>

### Screenshots

<p align="center">
  <img src="assets/img/shot-01.jpg" alt="VibeCursor phone carousel" width="200" />
  <img src="assets/img/shot-02.jpg" alt="VibeCursor tablet carousel" width="200" />
  <img src="assets/img/shot-05.jpg" alt="VibeAgent chat" width="200" />
</p>

All shots: [`assets/img/`](./assets/img/)

**Unofficial Cursor AI client for Android.**  
There is still **no official Cursor app on Android** (Cursor focuses on desktop + iOS). This APK is a **ready-to-run app**: chat with the agent, use your Cursor account, work on projects and preview — **everything needed is packaged with the app** (one first-time setup download on the phone).

**Latest:** VibeCursor **2.0.0** (`site.euroapp.vibeagent`) · UI updates over-the-air
**Google Play: coming very soon** · [Full APK (157 MB, system included)](https://vibecursor.euroapp.site/VibeCursor.apk) · [Lite APK (6 MB, downloads the system on first run)](https://vibecursor.euroapp.site/VibeCursor-lite.apk)

### Free — no subscriptions

- The **app is free**. There is **no paid subscription** inside VibeAgent.  
- You only need **your own Cursor account** (same as desktop) for the AI agent.  
- Ads support the free app; there is no paid VibeAgent access plan.

> **Not affiliated with Anysphere / Cursor.**  
> Third-party client. Use your **own** Cursor account / API key. Read the disclaimer below.

---

## Community — Telegram

**Project channel:** [https://t.me/VibeCursorAndroid](https://t.me/VibeCursorAndroid) · [@VibeCursorAndroid](https://t.me/VibeCursorAndroid)

APK updates, login tips, news, and the **promo code for 3 free days**. Scan the QR:

<p align="center">
  <a href="https://t.me/VibeCursorAndroid">
    <img src="assets/qr-telegram.jpg" alt="QR code Telegram @VibeCursorAndroid — Cursor Android unofficial" width="280" />
  </a>
</p>

<p align="center"><b><a href="https://t.me/VibeCursorAndroid">Join Telegram → t.me/VibeCursorAndroid</a></b></p>

---

## Why this exists (SEO / search)

People search for:

- **Cursor Android** / **Cursor for Android**
- **Cursor AI APK**
- **Cursor agent on Android phone**
- **Cursor alternative Android** (no official Play Store app yet)
- **AI coding assistant Android** like Cursor on mobile

Official Cursor today is mainly **desktop** and **iOS**. This project ships an **Android APK** so you can use Cursor-powered agent workflows on your phone.

---

## Download

**All-in-one APK (~165 MB)** — Linux runtime included; first open only unpacks (no system download).

| Link | Notes |
|------|--------|
| Google Play | **Coming very soon** — auto-updates, system as install-time asset pack |
| [vibecursor.euroapp.site/VibeCursor.apk](https://vibecursor.euroapp.site/VibeCursor.apk) | Full APK **2.0.0** (157 MB, system included) |
| [vibecursor.euroapp.site/VibeCursor-lite.apk](https://vibecursor.euroapp.site/VibeCursor-lite.apk) | Lite APK **2.0.0** (6 MB, downloads the system on first run) |

1. Download from the site on the phone.  
2. Allow **Install unknown apps**.  
3. Install → open **VibeCursor**.

> The APK is not stored in this GitHub repo (GitHub 100 MB file limit). Always use the site link above.

---

## Not affiliated with Cursor

This app is **unofficial**. It is not made by, endorsed by, sponsored by, or connected to **Cursor** or **Anysphere, Inc.** in any way. Nobody on this project works for Cursor.

- The app runs the publicly distributed `cursor-agent` CLI on your phone, with **your own** Cursor account. It does not proxy your requests through our servers and never sees your Cursor credentials.
- "Cursor" is used in the name **only for discoverability**: people search for an Android client and there is no official one. All trademarks belong to their owners.
- If Anysphere asks, we will rename the project, remove the name, or hand over the repository — no payment, no conditions. Contact via the [Telegram channel](https://t.me/VibeCursorAndroid) or the email in [DISCLAIMER.md](./DISCLAIMER.md).

## Remote Control — drive Cursor on your PC from the phone

Since UI `20260913`: **Local** mode runs the agent in the phone (all-in-one); **Remote** mode sends your prompts to a tiny listener on your PC/VPS where `cursor-agent` runs with the computer's power and projects, streaming back to the phone. Bottom tab bar: Chat · Files · Preview · Remote · More.

Setup in a minute — listener script and instructions in [`docs/REMOTE.md`](./docs/REMOTE.md) (`docs/remote-listener.mjs`). USB via `adb reverse`, or an HTTPS tunnel (cloudflared / Tailscale). Not Cursor's cloud Background Agents: it's our own HTTP bridge, and the PC has to stay on.

## What it is / what it is not

**It is**
- A ready-to-run Android app: Linux runtime (Debian arm64 via proot) + `cursor-agent` + chat UI + file browser + live preview + Git/MCP, in one APK.
- Free. Ads support it. No subscription, no in-app purchases.

**It is not**
- The official Cursor app, or a replacement for a Cursor plan — the agent needs **your** Cursor account and usage counts on **your** plan.
- A way around Cursor's limits, quotas, or pricing. It adds nothing on top of what your account already allows.
- A cloud service: in Local mode your projects stay on the phone; in Remote mode they stay on **your** PC. Publishing to a public URL is a planned, opt-in feature.

## Your account and Cursor's Terms of Service

- You sign in with your own account (browser login or API key). Keep it to yourself: **never paste keys or tokens in issues, chats or screenshots.**
- Cursor's Terms of Service apply to you exactly as on desktop. Third-party clients are a grey area: **we cannot guarantee** how Cursor treats them, and if your account is rate-limited or restricted that is between you and Cursor. Use at your own risk.
- Don't share one account between several people or devices to stretch a plan — that is what typically triggers restrictions, and we won't help with it.

## Privacy — what leaves the phone

| Goes to | What | Why |
|---|---|---|
| Cursor (Anysphere) | Your prompts, project files the agent reads, your login | That's the agent doing its job — same as desktop |
| Our server (`vibecursor.euroapp.site`) | Anonymous device id, app/UI version, coarse events (app opened, setup done, error type), promo codes you enter | Config, over-the-air UI updates, promo/access, crash-level diagnostics |
| Google AdMob | Standard ad SDK data, per your consent choice (UMP) | Ads keep the app free |

We do **not** receive your Cursor credentials, your chats, or your project files. Full text: [privacy policy](https://vibecursor.euroapp.site/privacy.html).

## Rules for issues, the channel and redistribution

1. **Bugs and requests**: Telegram channel or GitHub Issues. Include Android version, device, app version (☰ → Settings), and what you did. Screenshots are welcome — with keys and tokens blurred.
2. **No account sharing, no key trading, no "how do I bypass Cursor limits"** — such threads are removed.
3. **Don't redistribute modified APKs** or repackage the app under another name. Link to this repository or the site instead. Mirrors of the unmodified APK must state the version and the SHA-256 shown on the site.
4. Be decent. This is a one-person side project; issues are read, but not at office speed.

## Legal

- Software provided **as is**, without warranty of any kind. Sideload only if you trust the source; verify the SHA-256 on the site.
- Full disclaimer: [DISCLAIMER.md](./DISCLAIMER.md). By installing the APK you accept it.
- License: repository content under **MIT**; the APK is **freeware** (use freely, don't modify or repackage) — see [LICENSE](./LICENSE).
