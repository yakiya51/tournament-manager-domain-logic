import { TeamRepo } from "./common/repos/team-repo.js";
import { TournamentRepo } from "./common/repos/tournament-repo.js";
import { Team } from "./types/tournament/team.js";

export class TeamRegistraitonService {
  constructor(
    private tournamentRepo: TournamentRepo,
    private teamRepo: TeamRepo
  ) {}

  async registerTeam(tournamentId: number, team: Team): Promise<void> {
    const alreadyRegistered = this.tournamentRepo.isTeamRegistered(
      tournamentId,
      team.id
    );

    await this.tournamentRepo.register(tournamentId, team);
  }
}
