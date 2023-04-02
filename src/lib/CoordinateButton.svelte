<script lang="ts">
    import L from "leaflet";
    import Geolocate from "svelte-geolocation";
    import { map, myCoords } from "./store";

    let getPosition: boolean = false;

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

<Geolocate {getPosition} on:position={toCurrentPostion} />
<button on:click={getCurrentPostition}>Click for current position</button>
