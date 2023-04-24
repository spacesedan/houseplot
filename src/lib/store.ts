import { writable, type Writable } from "svelte/store";
import L from 'leaflet'
import type { Map, TileLayer } from 'leaflet'
import type { Plot } from "./types";
import { browser } from "$app/environment";
import MarkerPopup from './MarkerPopup.svelte'
import type { SvelteComponent } from 'svelte';

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

export function bindPopup(
    marker: L.Marker,
    createfn: (m: Element) => MarkerPopup
) {
    let popupComponent: SvelteComponent | null;

    marker.bindPopup(() => {
        let container = L.DomUtil.create("div");
        popupComponent = createfn(container);
        return container;
    });

    marker.on("popupclose", () => {
        if (popupComponent) {
            let old = popupComponent;
            popupComponent = null;
            setTimeout(() => {
                old.$destroy();
            }, 500);
        }
    });

}
export function createMarker(plot: Plot) {
    let marker = L.marker(plot.latLng);
    bindPopup(marker, (m: Element) => {
        let c = new MarkerPopup({
            target: m,
            props: { plot, markerLayer: marker },
        });

        return c;
    });

    // double click to remove
    // remove plot from cachec plots
    // remove marker layer from the map
    marker.on('dblclick', () => {
        plots.update(ps =>
            ps.filter(p => p != plot)
        )

        map.update(m => m.removeLayer(marker))
    })
    return marker;
}
