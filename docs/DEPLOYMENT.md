# Tap & Learn — Vercel Deployment Guide

## 1. Zero-Config Vercel Deployment

The Tap & Learn promotional website is engineered as a 100% static, performant Next.js 15 App Router application with zero mandatory backend, external databases, or paid API keys.

### Option A: Git Integration (Recommended)
1. Push this repository to GitHub:
   ```bash
   git add .
   git commit -m "feat: complete Tap & Learn promotional website"
   git push origin main
   ```
2. Navigate to [vercel.com/new](https://vercel.com/new) and import your repository.
3. Framework Preset: **Next.js** (automatically detected).
4. Build Command: `next build` (default).
5. Output Directory: `.next` (default).
6. Click **Deploy**.

### Option B: Vercel CLI
```bash
npm install -g vercel
vercel
# When ready for production:
vercel --prod
```

## 2. Environment Variables (Optional)

The core static website runs out of the box with zero environment variables. Optional public configuration variables:

| Variable | Required | Default | Description |
|---|---|---|---|
| `NEXT_PUBLIC_APP_DOWNLOAD_URL` | No | `""` | Direct Google Play or App Store release URL once live. When omitted, website transparently displays "Coming Soon / Get Notified". |
| `NEXT_PUBLIC_SUPPORT_EMAIL` | No | `"support@tapandlearn.app"` | Contact email displayed on Privacy Policy and Footer. |
| `NEXT_PUBLIC_WAITLIST_ENDPOINT` | No | `""` | Optional serverless endpoint or webhook for capturing waitlist emails. |

## 3. Production Verification Steps
- Verify homepage renders at root `/`.
- Verify `/privacy`, `/terms`, and `/404` routes render.
- Test the Interactive Word Demo on mobile and desktop browsers.
- Confirm OpenGraph metadata and images load properly via social debuggers.
