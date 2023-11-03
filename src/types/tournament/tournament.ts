import { Stage } from "./stage";

export type Tournament = {
  id: number;
  start: Date;
  teamLimit: number;
  stages: Stage[];
};
