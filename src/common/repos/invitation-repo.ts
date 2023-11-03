export interface InvitationRepo {
  exists(touranmentId: number, teamId: number): Promise<boolean>;
  create(tournamentId: number, teamId: number, key: string): Promise<void>;

  accept(userId: number, key: string): Promise<void>;

  reject(userId: number, key: string): Promise<void>;
}
