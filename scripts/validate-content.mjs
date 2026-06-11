import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

const CONTENT_ROOT = path.join(process.cwd(), "content");
const REQUIRED_KEYS = [
  "id",
  "title",
  "type",
  "tags",
  "threatLevel",
  "connectedFactions",
  "relatedEntries",
  "atAGlance",
  "sageNotes",
  "gameInformation",
];

const contentDirs = [
  "world-systems",
  "regions",
  "factions",
  "ascendency-paths",
  "sessions",
];

async function validateFile(filePath) {
  const raw = await readFile(filePath, "utf8");
  const parsed = JSON.parse(raw);
  const missing = REQUIRED_KEYS.filter((key) => !(key in parsed));

  if (missing.length > 0) {
    return [`${filePath} missing keys: ${missing.join(", ")}`];
  }

  return [];
}

async function run() {
  const issues = [];

  for (const directory of contentDirs) {
    const fullDir = path.join(CONTENT_ROOT, directory);
    const files = await readdir(fullDir);
    const jsonFiles = files.filter((file) => file.endsWith(".json"));

    for (const file of jsonFiles) {
      const fileIssues = await validateFile(path.join(fullDir, file));
      issues.push(...fileIssues);
    }
  }

  if (issues.length > 0) {
    console.error("Content validation failed:");
    for (const issue of issues) {
      console.error(`- ${issue}`);
    }
    process.exit(1);
  }

  console.log("Content validation passed.");
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
