// src/lib/stores/detailsStore.ts
import { writable } from "svelte/store";

export interface MovieDetails {
  year?: string;
  genre?: string;
  storyline?: string;
  type?: string;
  missing?: {
    year: boolean;
    genre: boolean;
    storyline: boolean;
    type: boolean;
  };
}

export const detailsStore = writable<MovieDetails>({
  year: undefined,
  genre: undefined,
  storyline: undefined,
  type: undefined,
  missing: {
    year: true,
    genre: true,
    storyline: true,
    type: true,
  },
});
