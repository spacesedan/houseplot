import { writable, type Writable } from "svelte/store";
import type { Map, LatLngExpression } from 'leaflet'
import type { Theme } from "./types";

export const theme: Writable<Theme> = writable()
export const map: Writable<Map> = writable();
export const myCoords: Writable<LatLngExpression> = writable();

