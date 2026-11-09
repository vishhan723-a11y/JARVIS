# JARVIS Architecture (Phase 1)

## Overview
```
[ Android app (Kotlin) ]  --HTTPS + token-->  [ Cloudflare Worker ]  -->  [ AI model ]
   UI, voice, device control                    /health, /chat             Workers AI
   local modules                                secrets stored here
```

## Android app (local, works offline where possible)
- UI: futuristic dashboard, hologram core, waveform
- Voice: speech recognition, text to speech, owner verification
- Device control: only what Android APIs allow
- Local modules: Antivirus, Cyber Defence, Emergency Protocol, Memory, Update Manager

## Backend (Cloudflare Worker)
- `GET /health` public status check
- `POST /chat` needs header `Authorization: Bearer <JARVIS_TOKEN>`
- AI keys and tokens are Worker secrets, never inside the app or GitHub

## Folder plan
```
JARVIS/
  README.md, index.html, style.css      website
  worker.js                             backend code
  docs/ARCHITECTURE.md                  this file
  app/                                  Android project (Phase 2)
```

## Data and privacy
- Memory stays on the phone and can be viewed, edited and deleted by the owner.
- Only the text needed for a cloud answer is sent to the Worker, and the app says when it does so.
- No hidden recording, no background surveillance.

## Phase 1 checklist
- [ ] GitHub repository created
- [ ] Website live on GitHub Pages
- [ ] .gitignore, LICENSE, SECURITY.md added
- [ ] Worker deployed, /health works
- [ ] JARVIS_TOKEN secret set
- [ ] Android project created
