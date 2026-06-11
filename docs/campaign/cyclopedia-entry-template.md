# Cyclopedia Entry Template

Use this format for all setting entries so the app can render consistent sections and links.

## Entry Metadata

- `id`: unique kebab-case id
- `title`: entry display title
- `type`: one of `region`, `city`, `faction`, `ascendency-path`, `session`, `world-system`
- `tags`: searchable keyword array
- `threatLevel`: `low`, `moderate`, `high`, or `cataclysmic`
- `connectedFactions`: related faction ids
- `relatedEntries`: related entry ids

## Section 1: At a Glance (Player-Facing)

Short, scannable summary of what characters immediately perceive.

## Section 2: A quip from Lore (Lore Voice)

In-world voice with rumors, hidden context, politics, and hooks.

## Section 3: Game Information (GM Mechanics)

Actionable 5e-compatible details for running play.

## Authoring Rules

- Keep `At a Glance` concise and spoiler-light.
- Put campaign secrets in `A quip from Lore` or `Game Information`.
- Prefer reusable mechanics over one-off bespoke rules.
- Every entry should link to at least 2 related entries by id.
