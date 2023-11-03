import { Group } from "./group";

import { Team } from "./team";

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
