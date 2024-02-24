import React from "react";
// import { listing } from "@/lib/mock-data";
import { ListingGrid } from "./listing-grid";
import { Property } from "@/lib/query-types";
import { client } from "../../sanity/lib/client";

export async function AllPropertyListings() {
  const listings = await client.fetch<
    Property[]
  >(`*[_type == 'property'] | order(_updatedAt) {
  ...,
  "floorPlanUrl": floorPlans.asset->url,
  "propertyImageUrl": propertyImage.asset-> url,
  "featuredImageUrl": featuredImage.asset->url,
}[0...20]
`);

  return <ListingGrid listing={listings} />;
}
