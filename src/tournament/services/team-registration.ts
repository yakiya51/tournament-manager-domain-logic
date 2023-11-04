import { TeamRepo } from "../repos/team-repo.js";
import { TournamentRepo } from "../repos/tournament-repo.js";
import { Team } from "../team.js";

export class TeamRegistraitonService {
  constructor(
    private tournamentRepo: TournamentRepo,
    private teamRepo: TeamRepo
  ) {}

  async registerTeam(tournamentId: number, team: Team): Promise<void> {
    const alreadyRegistered = await this.tournamentRepo.isTeamRegistered(
      tournamentId,
      team.id
    );

    if (alreadyRegistered) {
      throw Error("Team is already registered.");
    }

    await this.teamRepo.register(team, tournamentId);
  }
}
