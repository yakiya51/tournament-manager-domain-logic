import { Team } from "../../types/tournament/team";

export interface TeamRepo {
  getByTournamentId(tournamnetId: number): Promise<Team[]>;
}
