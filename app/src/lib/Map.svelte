<script lang="ts">
    import { map, plots, createMarker } from "./store";
    import L, { type TileLayer } from "leaflet";
    import { onDestroy, onMount } from "svelte";
    let mapElement: HTMLElement;
    let initialView: L.LatLngExpression = [45.5152, -122.6784]; // L.A. City Hall

    let maxZoom = 20;
    let subdomains = "PlotMe";
    let attribution =
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

    onMount(async () => {
        let darkTheme: TileLayer = L.tileLayer(
            "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
            {
                id: "Dark",
                attribution,
                subdomains,
                maxZoom,
            }
        );

        let lightTheme: TileLayer = L.tileLayer(
            "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
            {
                id: "Light",
                attribution,
                subdomains,
                maxZoom,
            }
        );

        let voyagerTheme: TileLayer = L.tileLayer(
            "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
            {
                id: "Voyager",
                attribution,
                maxZoom,
                subdomains,
            }
        );

        $map = L.map(mapElement).setView(initialView, 11);
        $map.addLayer(lightTheme);
        $map.addLayer(voyagerTheme);
        $map.addLayer(darkTheme);

        if ($plots.length) {
            $plots.forEach((p) => {
                const marker = createMarker(p)
                $map.addLayer(marker);
            });
        }

        let tileLayers = {
            Dark: darkTheme,
            Light: lightTheme,
            Voyager: voyagerTheme,
        };

        L.control.layers(tileLayers).addTo($map);
    });

    onDestroy(async () => {
        if ($map) {
            console.log("Unloading Leaflet map.");
            $map.remove();
        }
    });
</script>

<div class="map" bind:this={mapElement} />

<style>
    @import "leaflet/dist/leaflet.css";
    .map {
        height: 600px;
    }
</style>
