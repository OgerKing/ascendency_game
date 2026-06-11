import Link from "next/link";
import { EntryCard } from "@/components/entry-card";
import {
  ENTRY_TYPES,
  formatEntryType,
  getAllEntries,
  getEntriesByType,
} from "@/lib/content";

interface BrowsePageProps {
  searchParams: Promise<{ threat?: string; tag?: string; q?: string }>;
}

export default async function BrowsePage({ searchParams }: BrowsePageProps) {
  const { threat, tag, q } = await searchParams;
  const allEntries = getAllEntries();
  const visibleTypes = ENTRY_TYPES.filter((type) => type !== "session");
  const uniqueTags = [
    ...new Set(allEntries.filter((entry) => entry.type !== "session").flatMap((entry) => entry.tags)),
  ].sort();
  const activeThreat = threat ?? "all";
  const activeTag = tag ?? "all";
  const query = (q ?? "").trim().toLowerCase();

  const matchesFilters = (entry: (typeof allEntries)[number]) => {
    const typeMatch =
      (activeThreat === "all" || entry.threatLevel === activeThreat) &&
      (activeTag === "all" || entry.tags.includes(activeTag));

    if (!typeMatch) {
      return false;
    }

    if (!query) {
      return true;
    }

    const corpus = [
      entry.title,
      entry.type,
      entry.tags.join(" "),
      entry.atAGlance,
      entry.sageNotes,
    ]
      .join(" ")
      .toLowerCase();

    return corpus.includes(query);
  };
  const typeCounts = visibleTypes.map((type) => ({
    type,
    count: getEntriesByType(type).filter(matchesFilters).length,
  }));

  return (
    <main className="content-shell page-stack">
      <section className="hero-panel">
        <p className="kicker">Cyclopedia Browser</p>
        <h1>Browse and search lore</h1>
        <p>
          Entries are grouped by world systems, regions, factions, paths, classes,
          religions, organizations, notable NPCs, and city life dossiers. Use filters and
          full-text search to find player-facing lore quickly.
        </p>
        <form className="search-row" action="/browse" method="get">
          <input
            name="q"
            defaultValue={q ?? ""}
            placeholder="Search title, tags, at-a-glance, and A quip from Lore..."
            aria-label="Search entries"
          />
          <input type="hidden" name="threat" value={activeThreat} />
          <input type="hidden" name="tag" value={activeTag} />
          <button type="submit" className="button button-primary">
            Search
          </button>
        </form>
        <div className="filter-row">
          <div className="filter-group">
            <span>Threat</span>
            {["all", "moderate", "high", "cataclysmic"].map((value) => (
              <Link
                key={value}
                href={`/browse?threat=${value}&tag=${activeTag}&q=${encodeURIComponent(q ?? "")}`}
                className={value === activeThreat ? "chip active" : "chip"}
              >
                {value}
              </Link>
            ))}
          </div>
          <div className="filter-group">
            <span>Tag</span>
            <Link
              href={`/browse?threat=${activeThreat}&tag=all&q=${encodeURIComponent(q ?? "")}`}
              className={activeTag === "all" ? "chip active" : "chip"}
            >
              all
            </Link>
            {uniqueTags.slice(0, 9).map((value) => (
              <Link
                key={value}
                href={`/browse?threat=${activeThreat}&tag=${value}&q=${encodeURIComponent(q ?? "")}`}
                className={value === activeTag ? "chip active" : "chip"}
              >
                {value}
              </Link>
            ))}
          </div>
        </div>
        <div className="stats-grid">
          {typeCounts
            .filter((item) => item.count > 0)
            .map((item) => (
              <article key={item.type}>
                <h2>{item.count}</h2>
                <p>
                  <Link href={`#type-${item.type}`}>{formatEntryType(item.type)}</Link>
                </p>
              </article>
            ))}
        </div>
      </section>

      {visibleTypes.map((type) => {
        const entries = getEntriesByType(type).filter(matchesFilters);
        if (entries.length === 0) {
          return null;
        }

        return (
          <section key={type} className="page-stack" id={`type-${type}`}>
            <div className="section-heading">
              <h2>{formatEntryType(type)}</h2>
              <span>{entries.length} entries</span>
            </div>
            <div className="entry-grid">
              {entries.map((entry) => (
                <EntryCard key={entry.id} entry={entry} />
              ))}
            </div>
          </section>
        );
      })}
    </main>
  );
}
