import Link from "next/link";
import { EntryCard } from "@/components/entry-card";
import { getAllEntries, getEntriesByType } from "@/lib/content";

export default function Home() {
  const featuredRegions = getEntriesByType("region").slice(0, 3);
  const allEntries = getAllEntries();
  const pathCount = getEntriesByType("ascendency-path").length;
  const factionCount = getEntriesByType("faction").length;
  const religionCount = getEntriesByType("religion").length;
  const organizationCount = getEntriesByType("organization").length;
  const classCount = getEntriesByType("class").length;
  const npcCount = getEntriesByType("notable-npc").length;
  const cityLifeCount = getEntriesByType("city-life").length;

  return (
    <main className="content-shell page-stack">
      <section className="hero-panel">
        <p className="kicker">Player Primer</p>
        <h1>Vharos is a death world, and your spark is now in play.</h1>
        <p>
          In Ascendency Wars, fortress-cities cling to mountain stone while the jungle
          below eats armies, caravans, and fools. You begin in a city under siege, and
          disaster wakes a divine core inside you. From that hour on, you are no longer
          a bystander. You are an Ascendant, and the old powers will answer.
        </p>
        <div className="hero-actions">
          <Link href="/browse" className="button button-primary">
            Enter the Codex
          </Link>
          <Link href="/paths" className="button button-secondary">
            Compare Ascendency Paths
          </Link>
        </div>
      </section>

      <section className="primer-grid">
        <article className="primer-card">
          <p className="kicker">The World</p>
          <h2>The jungle is rich, beautiful, and lethal.</h2>
          <p>
            Wealth means little without a safe road to spend it on. Caravans are lifelines,
            weather kills as quickly as steel, and relic sites ignite border wars overnight.
            The Underdark does not threaten from afar; it has already breached the holds.
          </p>
        </article>
        <article className="primer-card">
          <p className="kicker">Ascendency System</p>
          <h2>Ascendency is your second track to power.</h2>
          <p>
            It unlocks at the table and advances across four tiers: Awakened, Ember,
            Mythic, and Apex. Think of it as pressure-forged divinity. The harder the
            crisis, the brighter the spark, and every new gift draws allies, zealots,
            and hunters.
          </p>
        </article>
        <article className="primer-card">
          <p className="kicker">Campaign Flavor</p>
          <h2>Mythic, brutal, and faction-heavy from the first session.</h2>
          <p>
            This is heroic survival under god-war pressure. Rival Ascendants raise cults,
            buy cities, and build engines that burn lives into power. Victories matter.
            So do grudges. The map remembers both.
          </p>
        </article>
      </section>

      <section className="stats-grid">
        <article>
          <h2>{allEntries.length}</h2>
          <p>codex entries</p>
        </article>
        <article>
          <h2>{factionCount}</h2>
          <p>major factions in play</p>
        </article>
        <article>
          <h2>{pathCount}</h2>
          <p>known ascendency paths</p>
        </article>
        <article>
          <h2>{religionCount}</h2>
          <p>active faith traditions</p>
        </article>
        <article>
          <h2>{organizationCount}</h2>
          <p>tracked organizations</p>
        </article>
        <article>
          <h2>{classCount}</h2>
          <p>custom class options</p>
        </article>
        <article>
          <h2>{npcCount}</h2>
          <p>notable npc profiles</p>
        </article>
        <article>
          <h2>{cityLifeCount}</h2>
          <p>city life dossiers</p>
        </article>
      </section>

      <section className="page-stack">
        <div className="section-heading">
          <h2>Featured Regions</h2>
          <Link href="/browse">Open full atlas</Link>
        </div>
        <div className="entry-grid">
          {featuredRegions.map((entry) => (
            <EntryCard key={entry.id} entry={entry} />
          ))}
        </div>
      </section>
    </main>
  );
}
