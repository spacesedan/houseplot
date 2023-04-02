<script lang="ts">
    import { waitingForLocation, locationResult } from "./store";
</script>

{#if !$waitingForLocation}
    <pre>{JSON.stringify($locationResult.features[0].properties.formatted, null, 2)}</pre>
{/if}
