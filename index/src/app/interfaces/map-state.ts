import { AgentProfile } from "./agent-profile";
import { GeocodeResult } from "./geocode-result";
import { IsolineRessult } from "./isoline-result";
import { RoutePair } from "./pair-route";

export interface MapState {
    geoItems: GeocodeResult[]
    geoRoutePairs: RoutePair[]
    distance: number
    agent: AgentProfile;
}
