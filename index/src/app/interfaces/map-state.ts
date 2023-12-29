import { Dictionary } from "lodash";
import { AgentProfile } from "./agent-profile";
import { GeocodeResult } from "./geocode-result";
import { RoutePair } from "./pair-route";

export interface MapState {
    geoItems: GeocodeResult[];
    geoCalculatingItems: GeocodeResult[];
    geoRoutePairs: RoutePair[];
    distance: number;
    toolState: ToolState[];
    agent: AgentProfile;
    geoCodeDatabase: Dictionary<GeocodeResult[]>;
}

export enum ToolType {
    normal,
    mesure
}

export class ToolState {
    toolType: ToolType = ToolType.normal;
    activated: Boolean = false;
    status: Boolean = false; 
}

export class EmptyState implements MapState {
    geoItems: GeocodeResult[] = [];
    geoCalculatingItems: GeocodeResult[] = [];
    geoRoutePairs: RoutePair[] = [];
    distance: number = 1000;
    toolState = [{
        toolType: ToolType.normal,
        activated: false,
        status: true
    }];
    agent: AgentProfile = {};
    geoCodeDatabase: Dictionary<GeocodeResult[]> = {};
}