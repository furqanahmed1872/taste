import { supabase } from "$lib/supabaseClient";
import { error } from "@sveltejs/kit";

export async function load() {
  const { data: movies, error: movieError } = await supabase
    .from("movies")
    .select("*")
    .eq("year", 2025)
    .limit(20);

  const { data: movies2, error: movies1Error } = await supabase
    .from("movies")
    .select("*")
    .eq("year", 2026)
    .limit(20);

  const { data: movies3, error: movies2Error } = await supabase
    .from("movies")
    .select("*")
    .eq("year", 2027)
    .limit(20);

  if (movieError || movies1Error || movies2Error) {
    console.error(
      "Error fetching data:",
      movieError,
      movies1Error,
      movies2Error
    );
    throw error(500, "Failed to fetch movies.");
  }
  return { movies, movies2, movies3 };
}
