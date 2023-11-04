import { Team } from "../team.js";
import { Tournament } from "../tournament.js";

export interface TournamentRepo {
  isTeamRegistered(id: number, userId: number): Promise<boolean>;

  isUserRegistered(id: number, userId: number): Promise<boolean>;

  getById(id: number): Promise<Tournament | null>;

  getByIdWithTeams(
    id: number
  ): Promise<(Tournament & { teams: Team[] }) | null>;

  register(tournamentId: number, team: Team): Promise<void>;
}
