export type Theme = {
    name: string,
    url: string,
    meta: {
        maxZoom: number,
        attribution: string,
        subdomains: string
    }
}

export type ReverseGeoCodingResult = {
    type: string;
    features: Feature[];
}

export type Feature = {
    type: string;
    geometry: Geometry;
    properties: Properties;
}

export type Geometry = {
    type: string;
    coordinates: number[];
}

export type Properties = {
    country_code: string;
    housenumber: string;
    street: string;
    country: string;
    county: string;
    datasource: Datasource;
    postcode: string;
    state: string;
    city: string;
    suburb: string;
    lon: number;
    lat: number;
    state_code: string;
    distance: number;
    result_type: string;
    formatted: string;
    address_line1: string;
    address_line2: string;
    timezone: Timezone;
    rank: Rank;
    place_id: string;
}

export type Datasource = {
    sourcename: string;
    attribution: string;
    license: string;
}

export type Rank = {
    popularity: number;
}

export type Timezone = {
    name: string;
    offset_STD: string;
    offset_STD_seconds: number;
    offset_DST: string;
    offset_DST_seconds: number;
    abbreviation_STD: string;
    abbreviation_DST: string;
}

