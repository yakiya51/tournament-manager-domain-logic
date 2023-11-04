import { InvitationKey } from "./invitation-key.js";
import { Stage } from "./stage.js";

export type Tournament = {
  id: number;
  start: Date;
  teamLimit: number;
  stages: Stage[];
  invitationKeys: InvitationKey[];
};
