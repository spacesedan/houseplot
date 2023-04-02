<script lang="ts">
    import L from "leaflet";
    import Geolocate from "svelte-geolocation";
    import { map, myCoords } from "./store";

    let getPosition: boolean = false;

    function getCurrentPostition() {
        getPosition = true;
    }

    // get the current coordinates retured from the GeoLocate Api and plots them in the map tile.
    async function toCurrentPostion(e: CustomEvent<GeolocationPosition>) {
        $myCoords = [e.detail.coords.latitude, e.detail.coords.longitude];
        $map.setView($myCoords, 13);
        L.marker($myCoords).addTo($map);
        var requestOptions = {
            method: "GET",
        };

        fetch(
            `https://api.geoapify.com/v1/geocode/reverse?lat=${$myCoords[0]}&lon=${$myCoords[1]}&apiKey=23708166fcbb4934af7f0eb158f0e306`,
            requestOptions
        )
            .then((response) => response.json())
            .then((result) => console.log(result))
            .catch((error) => console.log("error", error));
    }
</script>

<Geolocate {getPosition} on:position={toCurrentPostion} />
<button on:click={getCurrentPostition}>Click for current position</button>
