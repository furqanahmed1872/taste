import { createClient } from "@supabase/supabase-js";
import {
  PUBLIC_SUPABASE_URL,
  PUBLIC_SUPABASE_ANON_KEY,
} from "$env/static/public";
// // Use your Supabase URL and Key from the Supabase Dashboard
// const SUPABASE_URL = "your-supabase-url";
// const SUPABASE_KEY = "your-supabase-key";

// Initialize the Supabase client
export const supabase = createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY);
