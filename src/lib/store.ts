import { writable, type Writable } from "svelte/store";
import type { Map, TileLayer } from 'leaflet'
import type { Plot } from "./types";
import { browser } from "$app/environment";

export const currentTheme: Writable<TileLayer> = writable()
export const map: Writable<Map> = writable();


const retrievePlots = browser && localStorage.getItem('cached_plots')
// @ts-ignore
const parsedPlots = JSON.parse(retrievePlots)
export const plots = writable<Plot[]>(parsedPlots === null ? [] : parsedPlots);


plots.subscribe((value) => {
    if (browser) {
        window.localStorage.setItem('cached_plots', JSON.stringify(value))
    }
})

