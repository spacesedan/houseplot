<script lang="ts">
    import Geolocation from "svelte-geolocation";
    import L from "leaflet";
    import { onDestroy, onMount } from "svelte";

    let map: L.Map;
    let initialView: L.LatLngExpression = [34.0536, -118.243]
    let updatedView: L.LatLngExpression;
    let mapElement: HTMLElement;

    onMount(async () => {
        map = L.map(mapElement).setView(initialView, 13);

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution:
                '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map);
    });

    onDestroy(async () => {
        if (map) {
            console.log("Unloading Leaflet map.");
            map.remove();
        }
    });
</script>

<Geolocation
    getPosition
    on:position="{(e) => {
        console.log(e);
        updatedView =[e.detail.coords.latitude, e.detail.coords.longitude] 
        map.setView(updatedView, 13)
        L.marker(updatedView).addTo(map)
    }}"
/>
<div class="map" bind:this={mapElement} />

<style>
    @import "leaflet/dist/leaflet.css";
    .map {
        height: 800px;
    }
</style>
