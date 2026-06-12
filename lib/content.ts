import ascendencyV1 from "@/content/world-systems/ascendency-v1.json";
import foundations from "@/content/world-systems/foundations.json";
import emberfallCrossing from "@/content/regions/emberfall-crossing.json";
import kharadVul from "@/content/regions/kharad-vul.json";
import shatterveins from "@/content/regions/shatterveins.json";
import verdantMaw from "@/content/regions/verdant-maw.json";
import basaltCrown from "@/content/factions/basalt-crown.json";
import cinderConcord from "@/content/factions/cinder-concord.json";
import hollowSynod from "@/content/factions/hollow-synod.json";
import rootboundChoir from "@/content/factions/rootbound-choir.json";
import forgePath from "@/content/ascendency-paths/forge-path.json";
import veilPath from "@/content/ascendency-paths/veil-path.json";
import warPath from "@/content/ascendency-paths/war-path.json";
import wildPath from "@/content/ascendency-paths/wild-path.json";
import stormPath from "@/content/ascendency-paths/storm-path.json";
import tidePath from "@/content/ascendency-paths/tide-path.json";
import bonePath from "@/content/ascendency-paths/bone-path.json";
import dawnPath from "@/content/ascendency-paths/dawn-path.json";
import duskPath from "@/content/ascendency-paths/dusk-path.json";
import chainPath from "@/content/ascendency-paths/chain-path.json";
import mirrorPath from "@/content/ascendency-paths/mirror-path.json";
import hungerPath from "@/content/ascendency-paths/hunger-path.json";
import ruinPath from "@/content/ascendency-paths/ruin-path.json";
import starPath from "@/content/ascendency-paths/star-path.json";
import SkillShotPath from "@/content/ascendency-paths/SkillShot-path.json";
import sessionOne from "@/content/sessions/session-one-breaking-of-kharad-vul.json";
import ironboundBarbarianTradition from "@/content/classes/ironbound-barbarian-tradition.json";
import chainSentinelFighter from "@/content/classes/chain-sentinel-fighter.json";
import crownflameLiftGuild from "@/content/organizations/crownflame-lift-guild.json";
import ashMarkBrokers from "@/content/organizations/ash-mark-brokers.json";
import keepersOfTheNinthRivet from "@/content/religions/keepers-of-the-ninth-rivet.json";
import theCinderVigil from "@/content/religions/the-cinder-vigil.json";
import brakkaIronveil from "@/content/notable-npcs/brakka-ironveil.json";
import vellThreeTalliesMarr from "@/content/notable-npcs/vell-three-tallies-marr.json";
import emberRangerWayfinder from "@/content/classes/ember-ranger-wayfinder.json";
import graveChantClericOrder from "@/content/classes/grave-chant-cleric-order.json";
import redCairnCaravanLeague from "@/content/organizations/red-cairn-caravan-league.json";
import blackchainSalvagersCompact from "@/content/organizations/blackchain-salvagers-compact.json";
import lanternOfLastBreath from "@/content/religions/lantern-of-last-breath.json";
import stoneMotherCovenant from "@/content/religions/stone-mother-covenant.json";
import sisterHaleaAshmantle from "@/content/notable-npcs/sister-halea-ashmantle.json";
import liftmasterOdrinSlatehand from "@/content/notable-npcs/liftmaster-odrin-slatehand.json";
import chainAndCask from "@/content/city-life/chain-and-cask.json";
import emberMarketStairs from "@/content/city-life/ember-market-stairs.json";
import bellCodeOfKharadVul from "@/content/city-life/bell-code-of-kharad-vul.json";
import slaglineCant from "@/content/city-life/slagline-cant.json";
import dorunCaskbinder from "@/content/notable-npcs/dorun-caskbinder.json";
import maelaStepscribe from "@/content/notable-npcs/maela-stepscribe.json";
import magistrateThornIronbell from "@/content/notable-npcs/magistrate-thorn-ironbell.json";
import rakeQuicktongue from "@/content/notable-npcs/rake-quicktongue.json";

export const ENTRY_TYPES = [
  "world-system",
  "region",
  "faction",
  "ascendency-path",
  "session",
  "class",
  "organization",
  "religion",
  "notable-npc",
  "city-life",
] as const;

export type EntryType = (typeof ENTRY_TYPES)[number];
export type ThreatLevel = "low" | "moderate" | "high" | "cataclysmic";

export interface LoreEntry {
  id: string;
  title: string;
  type: EntryType;
  tags: string[];
  threatLevel: ThreatLevel;
  connectedFactions: string[];
  relatedEntries: string[];
  atAGlance: string;
  sageNotes: string;
  gameInformation: string;
}

const rawEntries = [
  ascendencyV1,
  foundations,
  emberfallCrossing,
  kharadVul,
  shatterveins,
  verdantMaw,
  basaltCrown,
  cinderConcord,
  hollowSynod,
  rootboundChoir,
  forgePath,
  veilPath,
  warPath,
  wildPath,
  stormPath,
  tidePath,
  bonePath,
  dawnPath,
  duskPath,
  chainPath,
  mirrorPath,
  hungerPath,
  ruinPath,
  starPath,
  SkillShotPath,
  sessionOne,
  ironboundBarbarianTradition,
  chainSentinelFighter,
  crownflameLiftGuild,
  ashMarkBrokers,
  keepersOfTheNinthRivet,
  theCinderVigil,
  brakkaIronveil,
  vellThreeTalliesMarr,
  emberRangerWayfinder,
  graveChantClericOrder,
  redCairnCaravanLeague,
  blackchainSalvagersCompact,
  lanternOfLastBreath,
  stoneMotherCovenant,
  sisterHaleaAshmantle,
  liftmasterOdrinSlatehand,
  chainAndCask,
  emberMarketStairs,
  bellCodeOfKharadVul,
  slaglineCant,
  dorunCaskbinder,
  maelaStepscribe,
  magistrateThornIronbell,
  rakeQuicktongue,
];

const entries: LoreEntry[] = rawEntries.map((entry) => ({
  ...entry,
  type: entry.type as EntryType,
  threatLevel: entry.threatLevel as ThreatLevel,
}));

export function getAllEntries(): LoreEntry[] {
  return entries;
}

export function getEntriesByType(type: EntryType): LoreEntry[] {
  return entries.filter((entry) => entry.type === type);
}

export function getEntry(type: EntryType, id: string): LoreEntry | undefined {
  return entries.find((entry) => entry.type === type && entry.id === id);
}

export function getRelatedEntries(entry: LoreEntry): LoreEntry[] {
  return entries.filter((candidate) => entry.relatedEntries.includes(candidate.id));
}

export function formatEntryType(type: EntryType): string {
  return type.replace("-", " ");
}
