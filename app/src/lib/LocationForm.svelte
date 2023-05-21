<script lang="ts">
    import type { LatLngExpression } from "leaflet";
    import { map, plots, createMarker } from "./store";
    import type { GeoapifyResult, Plot } from "./types";
    import { createRequestUrl } from "./helpers.js";

    let address: string;
    let postLink: string;
    let includeLink: boolean = false;
    let isFetching: boolean = false;
    let error: boolean = false


    async function submitLocation() {
        // do nothing if not input
        if (!address) return;

        if (includeLink && !postLink) return;

        address.trim();

        // check to see if the current address is already in local storage
        const alreadyFound = $plots.find((a) => a.address === address);
        if (alreadyFound) return;

        const requestUrl = createRequestUrl({ address });
        const requestOptions: RequestInit = {
            method: "GET",
        };

        isFetching = true;
        await fetch(requestUrl, requestOptions)
            .then((res) => res.json())
            .then((data: GeoapifyResult) => {
                const result = data.results[0];
                const latLng: LatLngExpression = [result.lat, result.lon];

                const plot: Plot = {
                    address,
                    latLng,
                    postLink,
                };

                const marker = createMarker(plot);
                $plots = [...$plots, plot];
                $map.addLayer(marker);

                address = "";
                postLink = "";
                isFetching = false;
            })
            .catch((err) => console.error(err));
    }
</script>

<form
    action="submit"
    class="flex flex-wrap font-mono items-end justify-start gap-3 my-5 py-2 mx-auto"
    on:submit|preventDefault={submitLocation}
>
    <label class="flex flex-col w-4/5 text-sm font-black text-gray-500">
        Address
        <input
            type="text"
            bind:value={address}
            class="px-3 py-2 border border-black rounded-md text-xl text-black"
        />
    </label>
    <button
        class="px-3 py-2 bg-blue-300 w-1/6 truncate font-bold text-xl rounded-md hover:bg-blue-500"
        type="submit">{!isFetching ? "add" : "fetching"}</button
    >
    <label
        class="flex w-full items-center gap-4 text-sm font-black text-gray-500"
    >
        <input type="checkbox" bind:checked={includeLink} />
        Include posting link
    </label>
    {#if includeLink}
        <label class="flex flex-col w-3/5 text-sm font-black text-gray-500">
            Post Link
            <input
                bind:value={postLink}
                type="text"
                class="px-3 py-2 border border-black rounded-md text-xl text-black"
            />
        </label>
    {/if}
</form>
