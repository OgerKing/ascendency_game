# Ascendency Game Website

Next.js site for the Ascendency Wars campaign codex and GM toolkit.

## Project Layout

The canonical app lives at the repository root (`app`, `components`, `content`, `lib`).
The legacy `lore-app` duplicate has been retired to prevent content and route drift.

## Local Development

```bash
npm install
npm run dev
```

## Local Pre-Push Safety Check

Run this before pushing:

```bash
npm run check:prepush
```

This runs:

- content schema validation
- lint
- production build

## Live Deploy Workflow

This repository is configured with GitHub Actions workflows:

- `.github/workflows/ci.yml`
  - Runs on every push and pull request
  - Validates content, lints, and builds
- `.github/workflows/vercel-preview.yml`
  - Runs on every non-`main` branch push
  - Deploys a Vercel Preview build
- `.github/workflows/vercel-production.yml`
  - Runs on `main` pushes
  - Deploys to Vercel Production

### Required GitHub Repository Secrets

Set these in GitHub repository settings:

- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

You can get `VERCEL_ORG_ID` and `VERCEL_PROJECT_ID` by linking locally with:

```bash
vercel link
```

Then copy values from `.vercel/project.json`.
