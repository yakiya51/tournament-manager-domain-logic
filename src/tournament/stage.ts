import { Group } from "./group.js";

import { Team } from "./team.js";

export const stageTypes = [
  "single-elimination",
  "double-elimination",
  "round-robin",
] as const;

export type StageType = (typeof stageTypes)[number];

export type Stage = {
  type: StageType;
  teams: Team[];
  groups: Group[];
};
