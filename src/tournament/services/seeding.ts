import { random } from "../../util/random.js";
import { Team } from "../team.js";

export class SeedingService {
  constructor() {}

  seedRandomly(teams: Team[]): Team[] {
    const seededTeamsCount = teams.filter((team) => team.seed > 0).length;

    if (seededTeamsCount > 0) {
      throw Error("Can't seed already seeded teams.");
    }

    const seeds = [...Array.from({ length: teams.length }).keys()];

    for (let i = 0; i < teams.length; i++) {
      const seedIdx = random(0, seeds.length - 1);

      teams[i] = {
        ...teams[i],
        seed: seeds[seedIdx] + 1,
      };

      seeds.splice(seedIdx, 1);
    }
    return teams;
  }
}
