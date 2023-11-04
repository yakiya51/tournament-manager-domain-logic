import { nanoid } from "nanoid";
import { InvitationKeyRepo } from "../repos/invitation-repo.js";
import { TeamRepo } from "../repos/team-repo.js";
import { TournamentRepo } from "../repos/tournament-repo.js";

export class TeamCreationService {
  constructor(
    private tournamentRepo: TournamentRepo,
    private invitationRepo: InvitationKeyRepo,
    private teamRepo: TeamRepo
  ) {}

  async registerInvitaitonKey(
    tournamentId: number,
    teamId: number
  ): Promise<void> {
    // invitation key already created for this team
    if (await this.invitationRepo.exists(tournamentId, teamId)) {
      throw Error(
        "An invitation key for this team has already been registered for this tournament."
      );
    }

    // team already registered
    if (await this.tournamentRepo.isTeamRegistered(tournamentId, teamId)) {
      throw Error("This team is already registered into the tournament.");
    }

    return await this.invitationRepo.register(tournamentId, teamId, nanoid());
  }

  async useInvitationKey(userId: number, key: string) {
    const invitationKey = await this.invitationRepo.getActiveInvitationByKey(
      key
    );

    if (!invitationKey) {
      throw Error("Invalid invitation key.");
    }

    const isUserAlreadyOnATeam = await this.tournamentRepo.isUserRegistered(
      invitationKey.team.id,
      userId
    );

    if (isUserAlreadyOnATeam) {
      throw Error("User is already on a team.");
    }

    return await this.invitationRepo.use(userId, key);
  }
}
