import { writable } from "svelte/store";

export const filters = writable({
  type: null,
  year: null,
 mood:null,
  genre: null,
  rating: null,
  storyline: null,
});


$: console.log(filters.type);