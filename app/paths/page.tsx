import Link from "next/link";
import { getEntry } from "@/lib/content";
import { pathComparisonRows } from "@/lib/path-comparison";

export default function PathsPage() {
  return (
    <main className="content-shell page-stack">
      <section className="hero-panel">
        <p className="kicker">Path Comparison</p>
        <h1>Choose your Ascendency style</h1>
        <p>
          Compare all 15 Ascendency paths by role, complexity, risk, and power curve.
          Click any path to open its full cyclopedia entry.
        </p>
      </section>

      <section className="comparison-grid">
        {pathComparisonRows.map((row) => {
          const entry = getEntry("ascendency-path", row.id);
          if (!entry) return null;

          return (
            <article key={row.id} className="comparison-card">
              <div className="comparison-head">
                <h2>{entry.title}</h2>
                <span>{entry.threatLevel}</span>
              </div>
              <p>{entry.atAGlance}</p>
              <ul>
                <li>
                  <strong>Role:</strong> {row.role}
                </li>
                <li>
                  <strong>Complexity:</strong> {row.complexity}
                </li>
                <li>
                  <strong>Risk:</strong> {row.risk}
                </li>
                <li>
                  <strong>Power Curve:</strong> {row.powerCurve}
                </li>
                <li>
                  <strong>Best Fit:</strong> {row.bestFit}
                </li>
              </ul>
              <Link href={`/entries/ascendency-path/${row.id}`} className="comparison-link">
                Open Path Details
              </Link>
            </article>
          );
        })}
      </section>
    </main>
  );
}
