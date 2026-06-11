import Link from "next/link";
import { getEntriesByType } from "@/lib/content";

const dungeonMasterDocs = [
  {
    slug: "world-bible",
    label: "World Bible",
    description: "Core setting premise, metaphysics, and campaign questions.",
  },
  {
    slug: "factions",
    label: "Factions Starter Set",
    description: "Four launch factions with clocks and agenda pressure.",
  },
  {
    slug: "session-one",
    label: "Session One Packet",
    description: "Scene flow, encounters, and awakening event.",
  },
  {
    slug: "ascendency-v1-rules",
    label: "Ascendency Rules v1",
    description: "5e-compatible alternate-feat progression and GM tools.",
  },
  {
    slug: "ascendency-path-comparison",
    label: "Ascendency Path Comparison",
    description: "Side-by-side matrix for all 14 paths and quick pick guidance.",
  },
  {
    slug: "cyclopedia-entry-template",
    label: "Cyclopedia Template",
    description: "Canonical entry format for future lore content.",
  },
];

export default function DMPage() {
  const sessions = getEntriesByType("session");

  return (
    <main className="content-shell page-stack">
      <section className="hero-panel">
        <p className="kicker">Dungeon Master</p>
        <h1>DM and session resources</h1>
        <p>
          This route is intentionally unlinked from player navigation and is for campaign
          prep, encounter planning, and session execution materials.
        </p>
      </section>

      <section className="page-stack">
        <div className="section-heading">
          <h2>Dungeon Master Resources</h2>
          <span>{dungeonMasterDocs.length} docs</span>
        </div>
        <div className="link-grid">
          {dungeonMasterDocs.map((doc) => (
            <Link key={doc.slug} href={`/docs/${doc.slug}`} className="link-card">
              <p>{doc.label}</p>
              <span>{doc.description}</span>
              <code>docs/campaign/{doc.slug}.md</code>
            </Link>
          ))}
        </div>
      </section>

      <section className="page-stack">
        <div className="section-heading">
          <h2>Session Resources</h2>
          <span>{sessions.length} sessions</span>
        </div>
        <div className="link-grid">
          {sessions.map((session) => (
            <Link key={session.id} href={`/entries/${session.type}/${session.id}`} className="link-card">
              <p>{session.title}</p>
              <span>{session.sageNotes}</span>
              <code>{session.gameInformation}</code>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
