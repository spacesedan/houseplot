<script lang="ts">
    import { currentTheme } from "./store";
    import type { TileLayer } from "leaflet";
    import L from "leaflet";

    let maxZoom = 20
    let subdomains = "abcd";

    let darkTheme: TileLayer = L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
        {
            id: "Dark",
            attribution:
                '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
            subdomains,
            maxZoom,
        }
    );

    let lightTheme: TileLayer = L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
        {
            id: "Light",
            attribution:
                '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
            subdomains,
            maxZoom,
        }
    );

    let voyagerTheme: TileLayer = L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
        {
            id: "Voyager",
            attribution:
                '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
            maxZoom,
            subdomains,
        }
    );

</script>

<select
    name="theme"
    bind:value={$currentTheme}
    on:change={() => {
        console.log($currentTheme);
    }}
>
        <option value={darkTheme}>Dark</option>
        <option value={lightTheme}>Light</option>
        <option value={voyagerTheme}>Voyager</option>
</select>
