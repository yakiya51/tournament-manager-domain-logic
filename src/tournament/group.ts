import { Round } from "./round.js";
import { Team } from "./team.js";

export type Group = {
  teams: Team[];
  rounds: Round[];
};
