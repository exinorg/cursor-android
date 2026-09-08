# Cursor for Android (unofficial) — VibeAgent APK

<p align="center">
  <img src="assets/logo.jpg" alt="VibeAgent — unofficial Cursor AI for Android logo" width="180" height="180" />
</p>

**Unofficial Cursor AI client for Android.**  
There is still **no official Cursor app on Android** (Cursor focuses on desktop + iOS). This APK is a **ready-to-run app**: chat with the agent, use your Cursor account, work on projects and preview — **everything needed is packaged with the app** (one first-time setup download on the phone).

### Free — no subscriptions

- The **app is free**. There is **no paid subscription** inside VibeAgent.  
- You only need **your own Cursor account** (same as desktop) for the AI agent.  
- Access can use optional rewarded ads **or** a **promo code** from the Telegram channel (**3 free days** per code use on that phone).

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

| File | Notes |
|------|--------|
| [`VibeAgent.apk`](./VibeAgent.apk) | Install on Android 10+ (arm64 recommended) |

1. Copy `VibeAgent.apk` to the phone (or open this repo on the device).  
2. Allow **Install unknown apps** for your file manager / browser.  
3. Install → open **VibeAgent**.

---

## Minimum requirements

| Requirement | Detail |
|-------------|--------|
| Android | **10+** (API 29+), **arm64** |
| RAM | **8 GB+** recommended |
| Storage | **~1–2 GB** free (APK ~18 MB + one-time on-device components ~290 MB) |
| Network | For Cursor login, models, and first setup |
| Account | **Your** Cursor account ([cursor.com](https://cursor.com)) |

On first launch the app installs its **built-in runtime pack** on the device (~290 MB, once). After that the agent and your projects stay **on the phone**.

---

## Features

- **Chat agent** (Cursor-style mobile UI) — **BETA** badge on home  
- **Multi-account Cursor**: log in with **2+ accounts** (OAuth and/or API key), switch anytime from the menu / login screen  
- **Login**: OAuth “Continue with Cursor” **or** API key  
- **Models** picker (`/model`, including Auto)  
- **Modes**: Normal / Plan / Ask + **Run Everything**  
- **Agent view**: **Silent** (compact) or **CLI** (terminal-style bar: model, usage %, files edited, Run Everything, tool activity like Grepping…) — toggles in Settings  
- **Slash commands** (`/usage`, `/help`, `/mcp`, `/memory`, `/summarize`, `/run-everything`, …)  
- **Projects** on device + folder picker + **HTML templates** starter  
- **Files** tree, read, ZIP export  
- **Publish** project to a public HTTPS URL (CDN)  
- **Live preview** for local web apps (split landscape / overlay, live reload option)  
- **Git** (remote URL + token, clone / push / pull)  
- **MCP** servers list (read-only from Cursor CLI)  
- **Persistent user memory** (not a full Hermes stack): profile + facts + episodes, injected every turn, synced to `MEMORY.md` in the project; `/memory` in chat; Settings → Memory. Survives new chats so the agent does not start from zero. Say “remember that…” or add facts in Settings.  
- **Clipboard manager** — save / reuse anything you copy-paste (codes, snippets, API keys, promo codes, links…)  
- **Home-screen notes** widget (quick notes)  
- **In-app UI updates** (OTA) when available  
- **Fullscreen** + screen rotation lock options  
- **Free app** — no in-app subscription  
- Optional rewarded ads **or** Telegram **promo code** (**3 free days**)  

---

## How to log in

### Option A — Continue with Cursor (OAuth)

1. Open the app → **Continue with Cursor**.  
2. Sign in in the browser / system flow.  
3. Return to the app.  
4. If it stalls: **Copy link** and open it in Chrome.

Same Cursor account as on desktop.

### Option B — API key

1. Create a key: [Cursor Dashboard → API Keys](https://cursor.com/dashboard/api?section=user-keys)  
2. In the app: paste → **Sign in with API key**.  
3. Do **not** share the key.

### Two or more accounts

1. Menu → **Add Cursor account** (or Settings → Cursor accounts).  
2. Add another login (OAuth or API key).  
3. Switch account from the list on the login screen or in the Agent menu — no reinstall needed.

### After login

1. Finish the **one-time setup** if the app asks (~290 MB, Wi‑Fi recommended).  
2. Create or open a **project** (optional: start from a **template**).  
3. Chat like on Cursor: code, fixes, previews.  
4. Optional: Settings → **Agent view** → **CLI** for a Cursor-CLI-style status bar (model, usage %, files edited, Run Everything, Grepping…).

### Getting access (English)

- The **app is free** — no VibeAgent subscription. You need **your** Cursor account for the agent.  
- **OAuth:** *Continue with Cursor* → Cursor login → back to the app (or *Copy link*).  
- **API key:** [Dashboard API Keys](https://cursor.com/dashboard/api?section=user-keys) → paste in the app.  
- **Multiple accounts:** sign in with **2+ Cursor accounts** (OAuth and/or API key) and switch from *Add Cursor account* / the account list.  
- **Setup:** first launch installs the bundled runtime (~290 MB). Then you work on the phone.  
- **3 free days:** join the [Telegram channel](https://t.me/VibeCursorAndroid), get the **promo code**, enter it on the access screen.  
- **Clipboard / notes:** in-app clipboard manager — save and reuse everything you copy/paste (codes, snippets, keys, promo codes, links).  
- **Memory:** persistent facts/episodes + `MEMORY.md` (Settings → Memory, `/memory`, “remember that…”). Not a full Hermes agent — lightweight so it fits on phone.  
- **New options:** agent view Silent/CLI, Run Everything, Plan/Ask, HTML templates, Publish to the web, Git, MCP, live preview, notes widget, OTA UI updates.

---

## Come accedere (italiano)

- **App gratuita**, **senza abbonamenti** in VibeAgent. Serve il tuo account Cursor per l’agent.  
- **OAuth:** *Continua con Cursor* → login Cursor → torna in app (o *Copia link*).  
- **API key:** [Dashboard API Keys](https://cursor.com/dashboard/api?section=user-keys) → incolla in app.  
- **Più account:** puoi entrare con **2+ account Cursor** (OAuth e/o API key) e cambiare dal menu *Aggiungi account* / lista account.  
- **Setup:** la prima volta l’app installa i componenti inclusi (~290 MB). Poi lavori sul telefono.  
- **3 giorni gratis:** entra nel [canale Telegram](https://t.me/VibeCursorAndroid), prendi il **codice promo** e inseriscilo in app (schermata accesso).  
- **Clipboard / annotazioni:** gestore clipboard in-app — salva e riusa tutti i pezzi che copi/incolli (codici, snippet, chiavi, promo, link).  
- **Memoria persistente:** fatti/episodi + `MEMORY.md` (Impostazioni → Memoria, `/memory`, «ricorda che…»). Non è Hermes completo — leggera, resta sul telefono tra una chat e l’altra.  
- **Nuove opzioni:** vista agent Silent/CLI, Run Everything, Plan/Ask, template HTML, Pubblica sul web, Git, MCP, anteprima live, widget note, aggiornamenti UI OTA.

---

## Brand

Logo: [`assets/logo.jpg`](./assets/logo.jpg)

---

## Privacy policy

**Public URL (use this wherever a privacy link is required — AdMob, stores, forms):**  
**https://cdn.euroapp.site/vibeagent/privacy.html**

Also linked in the app (access screen + Settings).

---

## Privacy & safety

- Agent and project files run **on your device**.  
- Models/usage go through **your Cursor account**.  
- The app itself is **free** (no subscription). Optional rewarded video or a Telegram promo code (**3 free days**) may unlock access time.  
- Full policy: [cdn.euroapp.site/vibeagent/privacy.html](https://cdn.euroapp.site/vibeagent/privacy.html)  
- Never share API keys. Rotate if leaked.

---

## Disclaimer

**VibeAgent / this repository is unofficial and independent.**  
Not a product of Cursor / Anysphere.  
“Cursor” only describes account/agent compatibility.  
Use at your own risk and respect Cursor’s Terms of Service.

---

## Support

- **Telegram:** [t.me/VibeCursorAndroid](https://t.me/VibeCursorAndroid)  
- Private preview for now; Issues when the repo goes public.

---

## Keywords

`Cursor Android`, `Cursor AI Android APK`, `Cursor for Android unofficial`, `AI coding Android`, `Cursor agent mobile`, `Cursor iOS vs Android`, `VibeAgent`, `VibeCursorAndroid`, `Telegram Cursor Android`, `run Cursor on phone`
