import { error } from "@sveltejs/kit";

export async function load({ url }) {
  const detailsParam = url.searchParams.get("details");
  if (!detailsParam) {
    throw error(400, "Details not provided");
  }

  const details = JSON.parse(detailsParam);
  console.log(details);
  return { details };
}
