import { Team } from "../team.js";

export interface TeamRepo {
  getByTournamentId(tournamnetId: number): Promise<Team[]>;

  isUserOnTeam(teamId: number, userId: number): Promise<boolean>;

  register(team: Team, tournamentId: number): Promise<void>;
}
