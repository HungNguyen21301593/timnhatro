import { Dictionary } from "lodash";
import { Address } from "./address";
import { AgentProfile } from "./agent-profile";
import { Position } from "./position";
import { RealstateData } from "./realstate-item";
import { IsolineRessult } from "./isoline-result";

export interface GeocodeResult {
    address: Address;
    position: Position;
    type: 'Home' | 'Office' | undefined;
    realstateData: RealstateData[];
    color: string;
    isolateResults?: Dictionary<IsolineRessult>;
}
