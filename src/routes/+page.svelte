<script lang="ts">
    import Geolocation from "svelte-geolocation";
    import L from "leaflet";
    import { onDestroy, onMount } from "svelte";
    import ThemePicker from "../lib/ThemePicker.svelte";
    import { theme, map, myCoords } from "../lib/store";

    let getPosition = false;
    let mapElement: HTMLElement;
    let initialView: L.LatLngExpression = [34.0536, -118.243]; // L.A. City Hall

    onMount(async () => {
        $map = L.map(mapElement).setView(initialView, 13);


        L.tileLayer($theme.url, {
            maxZoom: $theme.meta.maxZoom,
            attribution: $theme.meta.attribution,
            subdomains: $theme.meta.subdomains,
        })
            .redraw()
            .addTo($map);
    });

    onDestroy(async () => {
        if ($map) {
            console.log("Unloading Leaflet map.");
            $map.remove();
        }
    });

    function getCurrentPostition() {
        getPosition = true;
    }

    // get the current coordinates retured from the GeoLocate Api and plots them in the map tile.
    function toCurrentPostion(e: CustomEvent<GeolocationPosition>) {
        $myCoords = [e.detail.coords.latitude, e.detail.coords.longitude];
        $map.setView($myCoords, 13);
        L.marker($myCoords).addTo($map);
    }
</script>

<Geolocation {getPosition} on:position={toCurrentPostion} />
<button on:click={getCurrentPostition}>Click for current position</button>
<ThemePicker />
<div class="map" bind:this={mapElement} />

<style>
    @import "leaflet/dist/leaflet.css";
    .map {
        height: 800px;
    }
</style>
