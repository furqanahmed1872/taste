import { json } from "@sveltejs/kit";

export async function GET({ params, fetch, url }) {
  const year = url.searchParams.get("year");
  const page = url.searchParams.get("page");
  // console.log(year,page);
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=52c8b4baf59b6fc3d5b53f6a663406ab&primary_release_year=${year}&sort_by=popularity.desc&page=${page}`
  );

  if (!response.ok) {
    return json(
      { error: "Failed to fetch data from TMDb" },
      { status: response.status }
    );
  }

  const data = await response.json();
  return json(data);
}
