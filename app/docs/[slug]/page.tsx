import { readFile } from "node:fs/promises";
import path from "node:path";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";

interface DocPageProps {
  params: Promise<{ slug: string }>;
}

const DOCS_DIR = path.join(process.cwd(), "docs", "campaign");

async function readDoc(slug: string): Promise<string | null> {
  const extensions = [".mdx", ".md"];
  for (const ext of extensions) {
    try {
      return await readFile(path.join(DOCS_DIR, `${slug}${ext}`), "utf8");
    } catch {
      // Keep trying extensions.
    }
  }
  return null;
}

export default async function DocPage({ params }: DocPageProps) {
  const { slug } = await params;
  const source = await readDoc(slug);

  if (!source) {
    notFound();
  }

  return (
    <main className="content-shell page-stack">
      <section className="hero-panel">
        <p className="kicker">Campaign Document</p>
        <h1>{slug.replaceAll("-", " ")}</h1>
        <p>Rendered from docs/campaign as Markdown/MDX.</p>
      </section>

      <article className="entry-detail prose-panel">
        <MDXRemote source={source} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
      </article>

      <p className="small-note">
        <Link href="/dm">Back to DM resources</Link>
      </p>
    </main>
  );
}
