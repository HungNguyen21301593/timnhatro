import { GeocodeResult } from "src/app/interfaces/geocode-result";
import { RouteResult } from "src/app/interfaces/route-result";

export interface RoutePair {
    from: GeocodeResult;
    to: GeocodeResult;
    route: RouteResult;
}


