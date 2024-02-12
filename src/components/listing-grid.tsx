import React from "react";
import { ListingCard } from "./listing-card";
import { PropertyListing } from "@/lib/types";
import Link from "next/link";
import { Property } from "@/lib/query-types";

export function ListingGrid({ listing }: { listing: Property[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 xl:grid-cols-3">
      {listing.map((listing) => {
        return (
          <Link
            key={listing.slug.current}
            href={`/property-listings/${listing.slug.current}`}
          >
            <ListingCard listing={listing} />
          </Link>
        );
      })}
    </div>
  );
}
