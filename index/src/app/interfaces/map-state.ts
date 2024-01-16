import { Dictionary } from "lodash";
import { AgentProfile } from "./agent-profile";
import { GeocodeResult } from "./geocode-result";
import { RoutePair } from "./pair-route";
import { TravelSummary } from "./route-result";

export interface MapState {
    geoItems: GeocodeResult[];
    selectedItem: GeocodeResult | undefined;
    geoCalculatingItems: GeocodeResult[];
    calculatedResult: TravelSummary | undefined;
    geoRoutePairs: RoutePair[];
    distance: number;
    selectedTool: ToolType | undefined;
    toolState: ToolState[];
    agent: AgentProfile | undefined;
    geoCodeDatabase: Dictionary<GeocodeResult[]>;
}

export enum ToolType {
    info,
    mesure,
    radius
}

export class ToolState {
    toolType: ToolType = ToolType.info;
    description = "";
    activated = false;
}

export class EmptyState implements MapState {
    geoItems: GeocodeResult[] = [];
    selectedItem: undefined;
    geoCalculatingItems: GeocodeResult[] = [];
    calculatedResult = undefined;
    geoRoutePairs: RoutePair[] = [];
    distance: number = 1000;
    selectedTool: ToolType | undefined = undefined;
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