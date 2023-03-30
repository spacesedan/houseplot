<script lang="ts">
    import type { Theme } from "./types";
    import { theme } from "./providers/theme";
    import { onMount } from "svelte";

    let themes: Theme[] = [
        {
            name: "Dark",
            url: "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
            meta: {
                maxZoom: 20,
                attribution:
                    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
                subdomains: "abcd",
            },
        },
        {
            name: "Light",
            url: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
            meta: {
                maxZoom: 20,
                attribution:
                    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
                subdomains: "abcd",
            },
        },
        {
            name: "Voyager",
            url: "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
            meta: {
                maxZoom: 20,
                attribution:
                    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
                subdomains: "abcd",
            },
        },
    ];

    onMount(() => {
        $theme = themes[0];
        console.log($theme);
    });
</script>

<select name="theme" bind:value={$theme} on:change={() => {console.log($theme)}}>
    {#each themes as t}
        <option value={t}>{t.name}</option>
    {/each}
</select>
