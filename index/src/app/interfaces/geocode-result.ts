import { Dictionary } from "lodash";
import { Address } from "./address";
import { AgentProfile } from "./agent-profile";
import { Position } from "./position";
import { RealstateData } from "./realstate-item";
import { IsolineRessult } from "./isoline-result";
import { Color } from "./color";

export interface GeocodeResult {
    id: number;
    textId?: string;
    address: Address;
    position: Position;
    type: 'Home' | 'Office' | undefined;
    realstateData: RealstateData[];
    color: Color;
    isolateResults?: Dictionary<IsolineRessult>;
}
