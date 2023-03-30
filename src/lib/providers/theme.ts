import { writable } from "svelte/store";
import type { Writable } from "svelte/store";
import type { Theme } from "../types";

export const theme: Writable<Theme> = writable()

