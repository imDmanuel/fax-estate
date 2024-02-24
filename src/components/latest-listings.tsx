import Image from "next/image";
import React from "react";
import { listing } from "@/lib/mock-data";
import { ListingGrid } from "./listing-grid";
import { client } from "../../sanity/lib/client";
import { Property } from "@/lib/query-types";
import { groq } from "next-sanity";

const latestListings = groq`*[_type == 'property'] | order(_updatedAt) {
    ...,
    "propertyImageUrl": propertyImage.asset-> url,
    "propertyImagesUrl": propertyImages[].asset->url,
  "featuredImageUrl": featuredImage.asset->url,
  }[0...10]
  `;

export async function LatestListings() {
  const listings = await client.fetch<Property[]>(latestListings);

  return <ListingGrid listing={listings} />;
}
