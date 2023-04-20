<script lang="ts">
    import Map from "$lib/Map.svelte";
    import LocationForm from "$lib/LocationForm.svelte";
    import { plots } from "$lib/store";

    console.log($plots)
    $: cachedPlots = $plots
    console.log(cachedPlots)
</script>

<main class="container mx-auto">
    <LocationForm />
    <Map />
</main>
