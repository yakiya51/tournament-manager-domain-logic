import { Team } from "../../types/tournament/team";
import { Tournament } from "../../types/tournament/tournament";

export interface TournamentRepo {
  isTeamRegistered(id: number, userId: number): Promise<boolean>;

  getById(id: number): Promise<Tournament | null>;
  getByIdWithTeams(
    id: number
  ): Promise<(Tournament & { teams: Team[] }) | null>;

  register(tournamentId: number, team: Team): Promise<void>;
}
