import { supabase } from "$lib/supabaseClient";
import type { PageServerLoad, Actions } from "./$types.js";

export const load: PageServerLoad = async () => {
  const { data: movies, error } = await supabase
    .from("Movies") // Replace with your table name
    .select("*")
    .eq("year", 2024) // Filter by year 2024
    .gt("rating", 5)
    .or("genre.ilike.%action%,genre.ilike.%horror%"); // Filter for "action" in genre (case-insensitive)

  if (error) {
    console.error("Error inserting data:", error);
  }

  return { movies };
};
  // Filters
  // .eq('column', 'Equal to')
  // .gt('column', 'Greater than')
  // .lt('column', 'Less than')
  // .gte('column', 'Greater than or equal to')
  // .lte('column', 'Less than or equal to')
  // .like('column', '%CaseSensitive%')
  // .ilike('column', '%CaseInsensitive%')
  // .is('column', null)
  // .in('column', ['Array', 'Values'])
  // .neq('column', 'Not equal to')