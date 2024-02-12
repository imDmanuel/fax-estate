import Image from "next/image";
import React from "react";
import { listing } from "@/lib/mock-data";
import { ListingGrid } from "./listing-grid";
import { client } from "../../sanity/lib/client";
import { Property } from "@/lib/query-types";

export async function LatestListings() {
  // TODO: Import data from database..
  const listings = await client.fetch<
    Property[]
  >(`*[_type == 'property'] | order(_updatedAt) {
    ...,
    "floorPlanUrl": floorPlans.asset->url,
    "propertyImageUrl": propertyImage.asset-> url
  }[0...10]
  `);

  return <ListingGrid listing={listings} />;
}
