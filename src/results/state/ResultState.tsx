import { eventHeat } from "../../shared/types/EventHeat";

export type ResultState = {
  lastid: string;
  id: string;
  nextid?: string;
  EventHeat: eventHeat;
  lanes: string[];
  runtime?: string;
};

