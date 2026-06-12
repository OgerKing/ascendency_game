export type PathComplexity = "Low" | "Medium" | "High";
export type PathRisk = "Low" | "Medium" | "High";

export interface PathComparisonRow {
  id: string;
  role: string;
  complexity: PathComplexity;
  risk: PathRisk;
  powerCurve: string;
  bestFit: string;
}

export const pathComparisonRows: PathComparisonRow[] = [
  { id: "war-path", role: "Frontline striker", complexity: "Medium", risk: "Medium", powerCurve: "Fast early", bestFit: "Fighter, Paladin, Barbarian" },
  { id: "wild-path", role: "Skirmish survivor", complexity: "Medium", risk: "Medium", powerCurve: "Steady", bestFit: "Ranger, Monk, Druid" },
  { id: "veil-path", role: "Tempo controller", complexity: "High", risk: "Medium", powerCurve: "Mid spike", bestFit: "Rogue, Bard, Wizard" },
  { id: "forge-path", role: "Defensive support", complexity: "Medium", risk: "Low", powerCurve: "Steady", bestFit: "Cleric, Paladin, support builds" },
  { id: "storm-path", role: "Burst skirmisher", complexity: "Medium", risk: "Medium", powerCurve: "Fast early", bestFit: "Monk, Ranger, Sorcerer" },
  { id: "tide-path", role: "Control support", complexity: "Medium", risk: "Low", powerCurve: "Late payoff", bestFit: "Cleric, Druid, Bard" },
  { id: "bone-path", role: "Attrition tank", complexity: "Medium", risk: "High", powerCurve: "Mid spike", bestFit: "Barbarian, Fighter" },
  { id: "dawn-path", role: "Rally support", complexity: "Low", risk: "Low", powerCurve: "Steady", bestFit: "Paladin, Cleric, Bard" },
  { id: "dusk-path", role: "Surgical debuffer", complexity: "High", risk: "Medium", powerCurve: "Mid spike", bestFit: "Rogue, Bard, Warlock" },
  { id: "chain-path", role: "Lockdown controller", complexity: "High", risk: "Medium", powerCurve: "Steady", bestFit: "Fighter, Paladin, Wizard" },
  { id: "mirror-path", role: "Reactive duelist", complexity: "High", risk: "Medium", powerCurve: "Skill-gated", bestFit: "Rogue, Monk, duelists" },
  { id: "hunger-path", role: "Predatory snowball", complexity: "High", risk: "High", powerCurve: "Volatile", bestFit: "Barbarian, Warlock, Ranger" },
  { id: "ruin-path", role: "Siege breaker", complexity: "Medium", risk: "High", powerCurve: "Late spike", bestFit: "Fighter, Paladin, Sorcerer" },
  { id: "star-path", role: "Precision support", complexity: "Medium", risk: "Low", powerCurve: "Late payoff", bestFit: "Wizard, Cleric, Bard" },
  { id: "skillshot-path", role: "Mutual kill sniper", complexity: "High", risk: "High", powerCurve: "Volatile spike", bestFit: "Ranger, Rogue, Fighter" },
];
