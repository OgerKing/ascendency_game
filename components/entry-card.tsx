import Link from "next/link";
import type { LoreEntry } from "@/lib/content";

interface EntryCardProps {
  entry: LoreEntry;
}

export function EntryCard({ entry }: EntryCardProps) {
  return (
    <article className="entry-card">
      <div className="entry-meta">
        <span>{entry.type}</span>
        <span>{entry.threatLevel}</span>
      </div>
      <h3>
        <Link href={`/entries/${entry.type}/${entry.id}`}>{entry.title}</Link>
      </h3>
      <p>{entry.atAGlance}</p>
      <div className="entry-tags">
        {entry.tags.slice(0, 4).map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </article>
  );
}
