import { writable, type Writable } from "svelte/store";
import type { Map, LatLngExpression, TileLayer } from 'leaflet'
import type { ReverseGeoCodingResult } from "./types";

export const currentTheme: Writable<TileLayer> = writable()
export const map: Writable<Map> = writable();
export const myCoords: Writable<LatLngExpression> = writable();
export const locationResult: Writable<ReverseGeoCodingResult> = writable();
export const waitingForLocation: Writable<boolean> = writable(true)
