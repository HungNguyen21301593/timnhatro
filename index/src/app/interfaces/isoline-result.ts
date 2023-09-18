export interface Location {
    lat: number;
    lng: number;
}

export interface Place {
    type: string;
    location: Location;
    originalLocation: Location;
}

export interface Departure {
    time: string;
    place: Place;
}

export interface Range {
    type: string;
    value: number;
    consumptionType: string;
}

export interface Polygon {
    outer: string;
}

export interface Isoline {
    range: Range;
    polygons: Polygon[];
}

export interface Notice {
    title: string;
    code: string;
    severity: string;
}

export interface IsolineRessult {
    departure: Departure;
    isolines: Isoline[];
    notices: Notice[];
}