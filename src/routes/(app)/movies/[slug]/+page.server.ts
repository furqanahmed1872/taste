import { supabase } from "$lib/supabaseClient";
import type { PageServerLoad, Actions } from "./$types.js";

export const load: PageServerLoad = async () => {
  const { data: movies, error } = await supabase
    .from("series")
    .select("*")
    .eq("year", 2021)
    .gt("rating", 7)
    .or("genre.ilike.%horror%,genre.ilike.%mystery%");

  if (error) {
    console.error("Error inserting data:", error);
  }

  return { movies };
};
