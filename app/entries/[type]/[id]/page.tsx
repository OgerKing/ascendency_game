import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ENTRY_TYPES,
  formatEntryType,
  getEntry,
  getRelatedEntries,
  type EntryType,
} from "@/lib/content";

interface EntryPageProps {
  params: Promise<{ type: string; id: string }>;
}

function isEntryType(value: string): value is EntryType {
  return ENTRY_TYPES.includes(value as EntryType);
}

export default async function EntryPage({ params }: EntryPageProps) {
  const { type, id } = await params;
  if (!isEntryType(type)) {
    notFound();
  }

  const entry = getEntry(type, id);
  if (!entry) {
    notFound();
  }

  const related = getRelatedEntries(entry);
  const showNarrativeNotes = entry.type !== "session";

  return (
    <main className="content-shell page-stack">
      <section className="hero-panel">
        <p className="kicker">{formatEntryType(entry.type)}</p>
        <h1>{entry.title}</h1>
        <p>
          Threat level: <strong>{entry.threatLevel}</strong>
        </p>
      </section>

      <section className="entry-detail">
        <h2>At a Glance</h2>
        <p>{entry.atAGlance}</p>
      </section>

      {showNarrativeNotes ? (
        <section className="entry-detail">
          <h2>A quip from Lore</h2>
          <p>{entry.sageNotes}</p>
        </section>
      ) : null}

      <section className="page-stack">
        <div className="section-heading">
          <h2>Related Entries</h2>
          <Link href="/browse">Back to browse</Link>
        </div>
        <div className="link-grid">
          {related.map((item) => (
            <Link key={item.id} href={`/entries/${item.type}/${item.id}`} className="link-card">
              <p>{item.title}</p>
              <span>
                {formatEntryType(item.type)} - {item.threatLevel}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
