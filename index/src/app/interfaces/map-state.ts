import { Dictionary } from "lodash";
import { AgentProfile } from "./agent-profile";
import { GeocodeResult } from "./geocode-result";
import { RoutePair } from "./pair-route";
import { TravelSummary } from "./route-result";

export interface MapState {
    //info:
    agent: AgentProfile | undefined;
    geoItems: GeocodeResult[];
    //state:
    selectedTool: ToolType | undefined;

    // 1. dialog
    selectedItem: GeocodeResult | undefined;
    
    // 2. dialog
    geoCalculatingItems: GeocodeResult[];
    calculatedResult: TravelSummary | undefined;
    // 3. radius:
    distance: number;
    
    toolState: ToolState[];

    //database:
    geoCodeDatabase: Dictionary<GeocodeResult[]>;
    
}

export enum ToolType {
    mesure,
    radius
}

export class ToolState {
    toolType: ToolType = ToolType.mesure;
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
            toolType: ToolType.mesure,
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