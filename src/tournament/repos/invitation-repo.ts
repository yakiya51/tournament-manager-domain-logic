import { InvitationKey } from "../invitation-key.js";

export interface InvitationKeyRepo {
  getActiveInvitationByKey(key: string): Promise<InvitationKey | null>;

  exists(touranmentId: number, teamId: number): Promise<boolean>;

  register(tournamentId: number, teamId: number, key: string): Promise<void>;

  use(userId: number, key: string): Promise<void>;
}
