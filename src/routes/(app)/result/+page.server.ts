import { supabase } from "$lib/supabaseClient";
import { error } from "@sveltejs/kit";
import { filters } from "$lib/store";
import { get } from "svelte/store";

export async function load({ url }) {
  const filtersValue = {
    type: url.searchParams.get("type"),
    genre: url.searchParams.getAll("genre"),
    year: url.searchParams.get("year"),
    rating: url.searchParams.get("rating"),
  };
  console.log(filtersValue);

  if (
    (filtersValue.type,
    filtersValue.genre,
    filtersValue.year,
    filtersValue.rating)
  ) {
    const { data: movies, error: fetchError } = await supabase
      .from(filtersValue.type)
      .select("*")
      .gte("year", 2025 - filtersValue.year)
      .gte("rating", filtersValue.rating)
      .or(
        filtersValue.genre
          .map((genre) => `genre.ilike.%${genre}%`)
          .join("%,genre.ilike.%")
      )
      .limit(5);
    if (fetchError) {
      console.error("Error fetching data:", fetchError);
      throw error(500, "Failed to fetch movies.");
    }
    return { movies };
  } else {
    console.log("FILTERA NOT COMPLETE-----------------------");
  }
}
