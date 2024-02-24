import React from "react";
import {
  FaHeart,
  FaLocationPin,
  FaPlus,
  FaShare,
  FaShower,
} from "react-icons/fa6";
import { FiSquare } from "react-icons/fi";
import { HiArrowRight } from "react-icons/hi2";
import { StarRating } from "./star-rating";
import { IoBedOutline } from "react-icons/io5";
import Image from "next/image";
import { Property } from "@/lib/query-types";

export function ListingCard({ listing }: { listing: Property }) {
  let featuredImageUrl;
  if (listing.featuredImageUrl) {
    featuredImageUrl = listing.featuredImageUrl;
  } else if (listing.propertyImagesUrl && listing.propertyImagesUrl[0]) {
    featuredImageUrl = listing.propertyImagesUrl[0];
  } else {
    featuredImageUrl = "";
  }
  return (
    <div key={listing._id}>
      <div className="relative">
        {/* IMAGE */}
        <Image
          src={featuredImageUrl}
          alt=""
          width={600}
          height={400}
          className="object-cover w-full aspect-video"
        />
        {/* END IMAGE */}

        <div className="absolute top-0 left-0 right-0 text-white flex justify-between mt-6 mx-6">
          <div className="space-y-2">
            <div className="bg-black px-2 py-0.5">For Rent</div>
            <div className="bg-[#f15a29] px-2 py-0.5">Featured</div>
          </div>

          <div className="flex space-x-2">
            <div className="bg-slate-950/50 hover:bg-slate-900/70 cursor-pointer rounded-full size-8 grid place-items-center">
              <FaShare />
            </div>
            <div className="bg-slate-950/50 hover:bg-slate-900/70 cursor-pointer rounded-full size-8 grid place-items-center">
              <FaHeart />
            </div>
            <div className="bg-slate-950/50 hover:bg-slate-900/70 cursor-pointer rounded-full size-8 grid place-items-center">
              <FaPlus />
            </div>
          </div>
        </div>
      </div>

      {/* DETAILS PANEL */}
      <div className="relative bg-white -mt-20 p-4 mx-4">
        <div className="absolute bg-primary font-semibold px-4 py-0.5 top-0 -translate-y-1/2 right-0 mr-3">
          ${listing.price}
        </div>
        <div className="text-xl font-medium">{listing.name}</div>

        <div className="flex space-x-2 items-center mt-3 text-gray-600">
          <FaLocationPin className="text-xl" />

          <div className="text-sm text-gray-600">{listing.address}</div>
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap gap-4 text-sm text-gray-600 mt-6 mb-8">
          <div className="flex space-x-2 items-center">
            <div className="size-8 border-2 rounded-full p-2 grid place-items-center">
              <IoBedOutline className="text-xs" />
            </div>
            <div>{listing.bedrooms} Bedroom(s)</div>
          </div>

          <div className="flex space-x-2 items-center">
            <div className="size-8 border-2 rounded-full p-2 grid place-items-center">
              <FaShower className="text-xs" />
            </div>
            <div>{listing.bathrooms} Bathroom(s)</div>
          </div>

          <div className="flex space-x-2 items-center">
            <div className="size-8 border-2 rounded-full p-2 grid place-items-center">
              <FiSquare className="text-xs" />
            </div>
            <div>{listing.size} Sq Ft</div>
          </div>
        </div>

        <hr />

        <div className="mt-4 text-black font-semibold text-sm flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <div>More Details</div>
            <HiArrowRight />
          </div>

          <div>
            <StarRating value={listing.rating} />
          </div>
        </div>
      </div>
      {/* END DETAILS PANEL */}
    </div>
  );
}
