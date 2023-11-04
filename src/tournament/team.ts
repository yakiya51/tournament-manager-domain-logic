import { Player } from "./player.js";

export type Team = {
  id: number;
  seed: number; // 0 = unseeded
  players: Player[];
};
