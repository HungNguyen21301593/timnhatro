export interface RouteResult {
    sections: Section[]
}

export interface Section {
    polyline: string;
    arrival: RouteTime;
    departure: RouteTime;
    travelSummary: TravelSummary;
}

export interface RouteTime {
    time: string;
}

export interface TravelSummary
{
    baseDuration: number;
    duration: number;
    length: number;
}