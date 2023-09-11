import { AgentProfile } from "./agent-profile";
import { GeocodeResult } from "./geocode-result";
import { RoutePair } from "./pair-route";

export interface MapState {
    geoItems: GeocodeResult[]
    geoRoutePairs: RoutePair[]
    agent: AgentProfile;
}
