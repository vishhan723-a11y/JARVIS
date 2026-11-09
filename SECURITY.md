# Security Policy

## Rules for this repository
- Never commit API keys, tokens, passwords, keystores or personal data.
- Secrets live only in Cloudflare Worker secrets (for example `JARVIS_TOKEN`).
- This repository and its GitHub Pages site are public. Treat everything in it as public.
- If a secret is ever committed by mistake: change it immediately, then remove it from the repository. Deleting the file alone is not enough, because Git keeps history.

## Responsible use
JARVIS security tools (scanning, discovery, testing) are only for devices and networks you own or have written permission to test.

## Reporting a problem
Open a private note to the repository owner. Do not post vulnerabilities or secrets in public issues.
