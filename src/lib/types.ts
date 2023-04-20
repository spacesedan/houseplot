import type { LatLngExpression } from "leaflet"

export type AddressObject = {
    address: string,
}
export type Theme = {
    name: string,
    url: string,
    meta: {
        maxZoom: number,
        attribution: string,
        subdomains: string
    }
}

export type Plot = {
    address: string,
    latLng: LatLngExpression,
    postingLink: string
}

export type GeoapifyResult = {
    results: Array<{
        datasource: {
            sourcename: string
            attribution: string
            license: string
            url: string
        }
        country: string
        country_code: string
        state: string
        county: string
        city: string
        postcode: string
        district: string
        suburb: string
        street: string
        housenumber: string
        lon: number
        lat: number
        state_code: string
        formatted: string
        address_line1: string
        address_line2: string
        category?: string
        timezone: {
            name: string
            offset_STD: string
            offset_STD_seconds: number
            offset_DST: string
            offset_DST_seconds: number
            abbreviation_STD: string
            abbreviation_DST: string
        }
        result_type: string
        rank: {
            importance: number
            popularity: number
            confidence: number
            confidence_city_level: number
            confidence_street_level: number
            match_type: string
        }
        place_id: string
        bbox: {
            lon1: number
            lat1: number
            lon2: number
            lat2: number
        }
    }>
    query: {
        text: string
        parsed: {
            housenumber: string
            street: string
            postcode: string
            city: string
            state: string
            expected_type: string
        }
    }
}

