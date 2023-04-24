<script lang="ts">
    import type { Marker } from "leaflet";
    import type { Plot } from "./types";
    import { map, plots } from "./store";

    export let plot: Plot;
    export let markerLayer: Marker;

    function removeMarker() {
        $plots = $plots.filter((p) => p != plot);
        $map.removeLayer(markerLayer);
    }
</script>

<div class="text-lg">
    {#if plot.postLink}
        <p>
            Address: <a
                href={plot.postLink}
                target="_blank"
                rel="noreferrer noopener">{plot.address}</a
            >
        </p>
    {:else}
        <p>Address: {plot.address}</p>
    {/if}
</div>

<br />
<button
    class="px-3 py-2 bg-red-400 rounded-md font-bold hover:bg-red-600"
    on:click={removeMarker}>remove</button
>
