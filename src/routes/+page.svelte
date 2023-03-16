<script lang="ts">
    import Geolocation from "svelte-geolocation";
    import L from "leaflet";
    import { onDestroy, onMount } from "svelte";

    let map: L.Map;
    let mapElement: HTMLElement;
    let initialView: L.LatLngExpression = [34.0536, -118.243] // L.A. City Hall
    let currentPosition: L.LatLngExpression;

    onMount(async () => {
        map = L.map(mapElement).setView(initialView, 13);

       L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
	maxZoom: 20,
	attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
}).addTo(map);
    });

    onDestroy(async () => {
        if (map) {
            console.log("Unloading Leaflet map.");
            map.remove();
        }
    });

    function toCurrentPostion(e: CustomEvent<GeolocationPosition>) {
        currentPosition =[e.detail.coords.latitude, e.detail.coords.longitude] 
        map.setView(currentPosition, 13)
        L.marker(currentPosition).addTo(map)
    }
</script>

<Geolocation
    getPosition
    on:position={toCurrentPostion}
/>
<div class="map" bind:this={mapElement} />

<style>
    @import "leaflet/dist/leaflet.css";
    .map {
        height: 800px;
    }
</style>
