<script lang="ts">
    import type { LatLngExpression } from "leaflet";
    import { createRequestUrl } from "./helpers";
    import { plots } from "./store";
    import type { GeoapifyResult } from "./types";

    let address: string;
    let isFetching: boolean = false;

    async function submitLocation() {
        // do nothing if not input
        if (!address) return;

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
                $plots = [...$plots, { address, latLng, postingLink: "" }];
                isFetching = false;
            })
            .catch((err) => console.error(err));
    }
</script>

<form
    action="submit"
    class="flex font-mono items-end justify-center gap-5 my-5 py-2 mx-auto"
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
        class="px-3 py-2 bg-blue-300 w-1/5 truncate font-bold text-xl rounded-md hover:bg-blue-500"
        type="submit">{!isFetching ? "add" : "fetching"}</button
    >
</form>
