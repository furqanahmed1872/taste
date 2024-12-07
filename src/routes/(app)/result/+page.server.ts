import { supabase } from "$lib/supabaseClient";
import { error } from "@sveltejs/kit";

export async function load({ url }) {
  const detailsParam = url.searchParams.get("details");
  if (!detailsParam) {
    throw error(400, "Details not provided");
  }

  const details = JSON.parse(detailsParam);
  console.log(details);
  if (details) {
    const { data: movies, error } = await supabase
      .from(`${details.type}s`)
      .select("*")
      .eq("year", details.year)
      .gt("rating", details.rating || 5)
      .or(`genre.ilike.%${details.genre}%`);

    if (error) {
      console.error("Error inserting data:", error);
    }

    console.log(movies);
    return { movies };
  }
}
