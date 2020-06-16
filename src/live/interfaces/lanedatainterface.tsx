import { swimmerData } from "../../shared/types/SwimmerData";

export interface LaneData {
    lane: string;
    entrytime?: string;
    time?: string;
    place?: string;
    swimmer: swimmerData;
}

