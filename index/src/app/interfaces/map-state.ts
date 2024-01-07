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
    info,
    mesure
}

export class ToolState {
    toolType: ToolType = ToolType.info;
    description = "";
    activated = false;
    status = false;
}

export class EmptyState implements MapState {
    geoItems: GeocodeResult[] = [];
    geoCalculatingItems: GeocodeResult[] = [];
    geoRoutePairs: RoutePair[] = [];
    distance: number = 1000;
    toolState = [
        {
            description: "Thông tin nhà trọ :",
            toolType: ToolType.info,
            activated: true,
            status: true
        },
        {
            description: "Đo khoảng cách :",
            toolType: ToolType.mesure,
            activated: true,
            status: false
        }
    ];
    agent: AgentProfile = {};
    geoCodeDatabase: Dictionary<GeocodeResult[]> = {};
}