# Velora Türkiye — Milestone 1

Premium multilingual travel-planning product built with Next.js App Router and strict TypeScript.

## Run

```bash
npm install
npm run dev
```

Open `http://localhost:3000/en`. Supported locales: `en`, `tr`, `ar`, `fr`; Arabic uses full RTL layout.

## Architecture

- `src/app`: locale-aware routes and metadata
- `src/components`: focused layout, discovery, package and trip-builder UI
- `src/data`: realistic destination/package seed data
- `src/services`: deterministic itinerary, pricing and browser persistence
- `src/i18n`: complete Milestone 1 UI dictionaries
- `src/types`: domain and builder contracts
- `src/config`: public integration settings

The repository boundary is represented by `services/storage.ts`; it can be replaced by Supabase without coupling UI components to persistence. The deterministic itinerary service is similarly replaceable by an AI planning adapter later.

## Demo

No credentials are required for Milestone 1. Trip drafts are saved locally. WhatsApp uses `NEXT_PUBLIC_WHATSAPP_NUMBER`. This build creates requests only as a demo and does not make bookings or issue tickets.

## Deployment

Set the variables from `.env.example`, then deploy to Vercel with the standard Next.js preset.

## Next milestones

1. Transfer and flight quote flows; validated lead capture and reference IDs.
2. Client trip summary and local demo admin with real status updates.
3. Supabase, email, WhatsApp and payment adapters.
4. Full content localization, production imagery, structured data and final performance/accessibility audit.
