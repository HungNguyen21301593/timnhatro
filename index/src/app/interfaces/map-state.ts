import { Dictionary } from "lodash";
import { AgentProfile } from "./agent-profile";
import { GeocodeResult } from "./geocode-result";
import { IsolineRessult } from "./isoline-result";
import { RoutePair } from "./pair-route";

export interface MapState {
    geoItems: GeocodeResult[];
    geoCalculatingItems: GeocodeResult[];
    geoRoutePairs: RoutePair[];
    distance: number;
    toolMode: ToolMode
    agent: AgentProfile;
geoCodeDatabase: Dictionary<GeocodeResult[]>;
}

export enum ToolMode
{
    normal,
    mesure
}