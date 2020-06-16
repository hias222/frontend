import { swimmerData } from "../types/SwimmerData";

export interface LaneData {
    lane: string;
    entrytime?: string;
    time?: string;
    place?: string;
    swimmer: swimmerData;
}

