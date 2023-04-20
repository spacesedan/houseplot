import type { AddressObject } from "./types";

// Takes the address, city, state, and zipcode and returns a link
// that can be used to make a request to Geoapify
export const createRequestUrl = (address: AddressObject): string => {
    const baseUrl = 'https://api.geoapify.com/v1/geocode/search'
    const requestUrl = new URL(baseUrl)

    requestUrl.searchParams.append('text', `${address.address}`)
    requestUrl.searchParams.append('format', 'json')
    requestUrl.searchParams.append('apiKey', '23708166fcbb4934af7f0eb158f0e306')

    return requestUrl.toString()
}
