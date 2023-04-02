import { writable, type Writable } from "svelte/store";
import type { Map, LatLngExpression, TileLayer } from 'leaflet'

export const currentTheme: Writable<TileLayer> = writable()
export const map: Writable<Map> = writable();
export const myCoords: Writable<LatLngExpression> = writable();

