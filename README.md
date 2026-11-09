# JARVIS – Personal AI Assistant

A voice-controlled, hybrid (local + cloud) personal AI assistant for Android, built with free and open-source tools. Modular design so the same backend can later serve tablet and Windows apps.

> **Status:** Planning / Phase 1. Nothing below is claimed as working until it is built and tested.

---

## 1. Core Specifications

### 1.1 Identity and Access Control
- Wake phrase: **"Hey JARVIS"**
- Owner voice enrollment and speaker verification
- Reject commands from unknown speakers; replay-attack detection where technically possible
- Sensitive operations need **voice + passphrase or Android biometric** (voice alone is not secure enough)
- Owner-controlled emergency access

### 1.2 Voice Control of the Device (only what Android allows)
- Open apps, launch settings, media control, volume, brightness (with permission)
- Battery and device information
- Alarms, reminders, permitted notifications
- Launch camera, file access with permission, accessibility functions
- Network: Wi-Fi, Bluetooth, mobile data and hotspot **status**, speed info, connectivity monitoring, diagnostics
- Where Android blocks direct control, JARVIS opens the correct settings screen and guides the owner

### 1.3 JARVIS CYBER DEFENCE (authorized targets only)
- Network security analysis, device discovery and port scanning on **own/authorized** networks
- Website security checks, HTTPS certificate verification, DNS diagnostics
- Wi-Fi recommendations, password strength analysis, security log analysis
- Suspicious connection detection, audit reports, safe practice lab, OWASP learning aid
- Never: malware, credential stealers, ransomware, persistence, attacks on others

### 1.4 JARVIS ANTIVIRUS
- Scan categories: Quick, File, APK Security, Download, Full Accessible Storage, Security Audit
- Signature matching, APK permission and metadata analysis, dangerous URL checks
- Quarantine in app-private storage, scan history, severity reports, recommended actions
- Secure threat-definition updates (signed)
- Does **not** scan protected system areas or other apps' private data

### 1.5 JARVIS EMERGENCY PROTOCOL
- Lockdown, stop services, disable automation, guide permission revocation
- Securely clear JARVIS-owned temporary data and conversation data
- Owner-authorized reset of **JARVIS-owned data only**
- Destructive actions need: verified owner + explicit confirmation + second confirmation
- Never: wiping the phone, bricking, or touching third-party data

### 1.6 Learning and Memory
- Learns language preference, speaking style, frequent commands, approved corrections
- Memory manager: view, edit, delete; learning history; privacy controls
- No secret collection and no training on private device data

### 1.7 Update Manager
- Version check, signature verification, compatibility check, version history, rollback, corruption detection
- No silent changes to security rules, authentication, or executable code without owner approval

### 1.8 Voice
- Natural speech, adjustable speed and pitch, pauses
- Tamil, English, Thunglish (Tamil in English letters), mixed Tamil-English
- Continuous conversation and interruption handling

### 1.9 AI Brain (Hybrid)
- **Local:** basic commands, device info, offline functions, local security operations
- **Cloud:** reasoning, translation, knowledge, analysis
- Context and follow-up understanding; tells the owner when internet or an external AI service is needed

### 1.10 Interface
- Deep black, emerald-green neon, cyan highlights, animated AI core, live waveform, HUD panels
- Dashboard: AI core, voice activation, listening/processing/speaking status, device, network, security, antivirus, connected devices, memory controls, settings
- Animations optimized for mobile performance

### 1.11 Privacy and Security Architecture
- Owner authentication, HTTPS only, Android Keystore for secrets, encrypted local storage
- Permission management, secure sessions
- No hidden recording, no hidden surveillance, no unauthorized data transfer
- No API keys inside the app: keys live only as Cloudflare Worker secrets

---

## 2. Technology Stack (free / open source)

| Layer | Choice |
|---|---|
| Android app | Kotlin, built in AndroidIDE (or Android Studio on PC) |
| Source hosting | GitHub (free) |
| Backend | Cloudflare Workers (free tier) |
| Speech-to-text | Android SpeechRecognizer first; open-source options (Vosk, Whisper) later |
| Text-to-speech | Android TextToSpeech first; open-source natural voices later |
| Local AI | Optional small open-source models (device permitting) |
| Cloud AI | Configurable provider through the Worker |

---

## 3. Limitations and Honest Notes

| Area | Limitation |
|---|---|
| Hotspot | Normal apps cannot toggle hotspot silently; JARVIS can read status and open the settings screen |
| Wi-Fi / mobile data | Android 10+ blocks app toggling; status and guided settings only |
| Bluetooth | Toggle works only on older Android versions; status and guided settings otherwise |
| Voice authentication | Not fully secure alone; replay detection is best-effort; passphrase/biometric required for sensitive actions |
| Wake word "Hey JARVIS" | Always-listening needs a foreground service and uses battery; a custom wake word needs training |
| Background control | Android restricts background apps; some features work only while JARVIS is open or running as a visible service |
| Antivirus | Cannot read other apps' private data or protected system areas; detection is signature/heuristic only, not a replacement for Google Play Protect |
| Cyber tools | Port scans and discovery only on networks you own or have written permission for; unauthorized use is illegal |
| Emergency reset | Affects JARVIS data only; cannot wipe the phone or revoke every permission silently |
| Free cloud AI | Quotas and policies can change; unlimited free usage is **not** guaranteed |
| Tamil voice quality | Depends on the phone's installed TTS engines; very human-like Tamil may need extra engines |
| Hologram UI | Real 3D adds battery and GPU load; will be tuned per device |
| Windows / tablet | Planned after the Android app is stable; separate clients on the same backend |
| GitHub Pages | Free Pages sites are **public**: never put API keys, passwords or personal data in this repository |

---

## 4. Additional Requirements (added)

1. **Secrets:** never commit keys; use Worker secrets and `.gitignore`.
2. **Rate limiting and auth token** on the Worker so strangers cannot use your AI quota.
3. **Offline fallback** when there is no internet.
4. **Battery and permission usage screen** inside the app.
5. **Logging** of security actions (local only, owner-viewable).
6. **Backups** before every major change (zip + GitHub commit).
7. **Testing checklist** per phase before moving on.
8. **License:** choose an open-source license (e.g. MIT) for the repository.
9. **Legal and ethics:** use security tools only on authorized systems.

---

## 5. Roadmap

| Phase | Goal | Status |
|---|---|---|
| 1 | Architecture, accounts, repository, Worker | In progress |
| 2 | Futuristic interface | Not started |
| 3 | Voice recognition and natural speech | Not started |
| 4 | Owner voice authentication | Not started |
| 5 | AI brain, multilingual conversation | Not started |
| 6 | Android device control | Not started |
| 7 | Wi-Fi, Bluetooth, hotspot management | Not started |
| 8 | Cyber Defence module | Not started |
| 9 | Antivirus module | Not started |
| 10 | Emergency Protocol | Not started |
| 11 | Learning and memory | Not started |
| 12 | Secure update manager | Not started |
| 13 | Performance optimization | Not started |
| 14 | Testing and APK generation | Not started |

---

## 6. Development Rules
- Beginner-friendly: exact file names, folders, and one command at a time
- Confirm each stage before the next begins
- No fake features; unsupported Android features are stated clearly
- Previously working features are preserved
- 
