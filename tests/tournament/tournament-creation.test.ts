import { expect, test } from "vitest";
import { SeedingService } from "../../src/tournament/services/seeding.js";
import { Team } from "../../src/tournament/team.js";

test("randomly seed teams", () => {
  const teamCount = 5;
  let teams: Team[] = Array(teamCount).fill({
    id: 1,
    players: [
      {
        id: "player1",
      },
    ],
    seed: 0,
  });

  const seeder = new SeedingService();

  teams = seeder.seedRandomly(teams);

  const seeds = new Set(teams.map((team) => team.seed));

  expect(seeds.size).toBe(teamCount);
  teams.forEach((_, i) => {
    expect(seeds).toContain(i + 1);
  });
});
