---
name: fantasy-descriptive-writer
description: Writes high-quality fantasy descriptive prose for scenes, characters, locations, artifacts, and atmosphere. Use when the user asks for vivid worldbuilding text, environmental description, lore flavor, immersive narration, or help making fantasy writing more evocative and specific.
disable-model-invocation: true
---

# Fantasy Descriptive Writer

## Purpose

Use this skill to produce polished fantasy description that is immersive, concrete, and emotionally resonant without becoming bloated or purple.

## Default Style Targets

- Prioritize clarity first, then beauty.
- Keep imagery specific and grounded in physical details.
- Use strong nouns and verbs; minimize adverb-heavy sentences.
- Match tone to the user's intent: grim, wondrous, eerie, sacred, playful, or courtly.
- Keep invented details internally consistent with stated lore.

## Classic Realms-Like Style Profile

When the user wants a style similar to early Forgotten Realms setting material, use these defaults:

- Voice: confident setting chronicler, informed and practical, mildly dramatic.
- Form: short-to-medium paragraphs with high information density.
- Focus: place-first worldbuilding (roads, ports, keeps, markets, ruins, cult sites).
- Texture: blend sensory detail with social detail (trade, faiths, feuds, laws, customs).
- Naming: frequent proper nouns, titles, and regional references used consistently.
- Cadence: vivid but restrained; avoid purple excess and modern slang.
- Endings: close sections with a hook, warning, rumor, or looming consequence.

## Extracted Source Patterns

Mirror these structural patterns when asked for explicit "classic Realms" flavor:

- Use compact section labels for reference-style entries:
  - `AT A GLANCE:`
  - `CHRONICLER'S NOTES:` (or a named in-world sage)
  - `GAME INFORMATION:`
- Include pronunciation tags for uncommon names: `Name (PRON-UN-see-AY-shun)`.
- Alternate broad overview and specific local detail (politics, roads, inns, trade costers, factions).
- Mix rumor-level claims with cautious qualifier language (`is said`, `little is known`, `presumably`).
- Include named power structures and office titles, not just generic rulers.
- Provide gameable outputs where requested (hooks, stats, factions, routes, hazards).

## Input Checklist

Before writing, identify:

1. Subject type (place, person, creature, object, event, weather, culture)
2. Desired tone and intensity
3. Point of view (neutral narrator, in-world voice, close character POV)
4. Length target (short blurb, paragraph, multi-paragraph)
5. Any canon constraints or names to preserve

If key context is missing, make one reasonable assumption and state it briefly.

## Descriptive Workflow

1. Establish anchor details:
   - time of day
   - light or darkness quality
   - weather or air condition
   - dominant textures/materials
2. Add sensory layering:
   - sight (shape, color, motion)
   - sound (distant, near, rhythmic, abrupt)
   - smell/taste (sparingly, but memorable)
   - touch/temperature (pressure, dampness, grit, warmth)
3. Introduce cultural or historical traces:
   - worn symbols, rituals, sayings, architecture, scars of old wars
4. Add one tension element:
   - danger, mystery, urgency, awe, reverence, taboo, omen
5. Close with a forward hook:
   - a question, threat, invitation, or implied consequence

## Quality Rules

- Avoid generic fantasy filler (for example: "ancient magic filled the air").
- Replace abstractions with observable cues.
- Use metaphors sparingly and only when they sharpen meaning.
- Do not stack multiple ornate clauses when one precise sentence works better.
- Keep naming patterns and spelling consistent within the same response.
- Do not imitate copyrighted prose directly.
- If emulating legacy setting-book tone, emulate structure and cadence, not exact phrasing.

## Revision Pass (Mandatory)

After drafting, run this quick pass:

1. Remove cliches and vague adjectives.
2. Ensure at least 3 concrete sensory details.
3. Ensure each paragraph contains one meaningful image or action.
4. Trim any sentence that exists only for ornament.
5. Confirm tone consistency from first line to last line.

## Output Modes

When the user does not specify, default to **Balanced Descriptive Paragraph** (120-180 words).

- **Micro Description**: 1-3 sentences, punchy and evocative
- **Balanced Descriptive Paragraph**: 120-180 words, practical default
- **Cinematic Passage**: 250-450 words, layered and atmospheric
- **Lore Fragment**: in-world chronicle, scripture, travel note, or tavern account

## Rewriting Existing Text

If asked to improve provided prose:

1. Preserve core meaning and lore facts.
2. Keep proper nouns unless the user asks for renaming.
3. Upgrade weak verbs, flatten repetition, and improve cadence.
4. Return:
   - revised text
   - 2-4 concise notes on what changed and why

## Response Template

Use this simple structure when useful:

1. Establishing line (location or subject anchor)
2. Sensory expansion (2-4 details)
3. Cultural/world detail (1-2 details)
4. Tension or mood turn
5. Closing hook

## Realms-Like Section Template

Use this template when the user asks for setting-guide style text:

1. Place identity (what it is and why it matters)
2. Physical profile (terrain, structures, climate, roads/water access)
3. People and power (factions, rulers, guilds, temples, rivalries)
4. Daily texture (trade goods, tavern culture, local hazards, law)
5. Active tensions (monsters, intrigue, border pressure, old magic)
6. Adventure hooks (1-3 concise leads)

For stricter emulation, use this block order:

1. `AT A GLANCE:` 2-4 concise lines
2. `CHRONICLER'S NOTES:` 1-3 short paragraphs
3. `GAME INFORMATION:` practical bullets for play use

## Tone and Diction Guardrails

- Prefer formal-but-readable register over archaic parody.
- Use selective emphasis via epithets and titles (for example, "the Merchant-Kingdom").
- Keep sentence rhythm varied: factual lines punctuated by one evocative turn.
- Avoid modern idioms, slang, and contemporary bureaucratic vocabulary.

## Examples

User intent: "Describe a haunted marsh at dawn in two paragraphs."
Expected move: damp sensory detail, low visibility, subtle threat cues, one lore trace, ending hook.

User intent: "Make this city description less generic."
Expected move: preserve city identity, replace abstractions with specific architecture, street life, sounds, and social signals.
