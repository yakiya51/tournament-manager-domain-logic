import { nanoid } from "nanoid";
import { InvitationRepo } from "./common/repos/invitation-repo.js";
import { TeamRepo } from "./common/repos/team-repo.js";
import { TournamentRepo } from "./common/repos/tournament-repo.js";

export class TeamCreationService {
  constructor(
    private tournamentRepo: TournamentRepo,
    private invitationRepo: InvitationRepo,
    private teamRepo: TeamRepo
  ) {}

  async registerInvitaitonKey(
    tournamentId: number,
    teamId: number
  ): Promise<string> {
    // invitation key already created for this team
    if (await this.invitationRepo.exists(tournamentId, teamId)) {
      throw Error("Team is already registered.");
    }

    // team already registered
    if (await this.tournamentRepo.isTeamRegistered(tournamentId, teamId)) {
      throw Error("Team is already registered.");
    }

    return nanoid();
  }
}
