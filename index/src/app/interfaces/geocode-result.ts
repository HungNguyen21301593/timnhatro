import { Address } from "./address";
import { AgentProfile } from "./agent-profile";
import { Position } from "./position";
import { RealstateData } from "./realstate-item";

export interface GeocodeResult {
    address: Address;
    position: Position;
    type: 'Home' | 'Office' | undefined;
    realstateData: RealstateData[];
}
