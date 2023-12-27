import Image from "next/image";
import React from "react";
import house1 from "@/assets/images/house-1.jpg";
import { HiMapPin as LocationPin, HiArrowRight } from "react-icons/hi2";
import { IoBedOutline } from "react-icons/io5";
import { FiSquare, FiArrowRight } from "react-icons/fi";
import { FaShower } from "react-icons/fa6";
import { ShowerHead } from "lucide-react";

const listing = [
  {
    id: 1,
    name: "Hermosa Casa al Norte",
    price: 12000,
    address: "288 Highgate Road, London",
    beds: 8,
    baths: 6,
    size: 2400,
    rating: 4.5,
    image: house1,
  },
  {
    id: 2,
    name: "Hermosa Casa al Norte",
    price: 12000,
    address: "288 Highgate Road, London",
    beds: 8,
    baths: 6,
    size: 2400,
    rating: 4.5,
    image: house1,
  },
  {
    id: 3,
    name: "Hermosa Casa al Norte",
    price: 12000,
    address: "288 Highgate Road, London",
    beds: 8,
    baths: 6,
    size: 2400,
    rating: 4.5,
    image: house1,
  },
];

export function LatestListings() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 2xl:grid-cols-3">
      {listing.map((listing) => {
        return (
          <div key={listing.id}>
            {/* IMAGE */}
            <Image
              src={listing.image}
              alt=""
              width={600}
              height={400}
              className="object-cover w-full aspect-video"
            />
            {/* END IMAGE */}

            {/* DETAILS PANEL */}
            <div className="relative bg-white -mt-20 p-4 mx-4">
              <div className="absolute bg-primary font-bold px-4 py-0.5 top-0 -translate-y-1/2 right-0 mr-3">
                ${listing.price}
              </div>
              <div className="text-xl font-medium">{listing.name}</div>

              <div className="flex space-x-2 items-center mt-3 text-gray-600">
                <LocationPin className="text-xl" />

                <div className="text-sm text-gray-600">{listing.address}</div>
              </div>

              <div className="flex space-x-4 text-sm text-gray-600 mt-6 mb-8">
                <div className="flex space-x-2 items-center">
                  <div className="size-8 border-2 rounded-full p-2 grid place-items-center">
                    <IoBedOutline className="text-xs" />
                  </div>
                  <div>{listing.beds} Bed(s)</div>
                </div>

                <div className="flex space-x-2 items-center">
                  <div className="size-8 border-2 rounded-full p-2 grid place-items-center">
                    <FaShower className="text-xs" />
                  </div>
                  <div>{listing.beds} Bath(s)</div>
                </div>

                <div className="flex space-x-2 items-center">
                  <div className="size-8 border-2 rounded-full p-2 grid place-items-center">
                    <FiSquare className="text-xs" />
                  </div>
                  <div>{listing.size} Sq Ft</div>
                </div>
              </div>

              <hr />

              <div className="mt-4 text-black font-semibold text-sm">
                <div className="flex items-center space-x-1">
                  <div>More Details</div>
                  <HiArrowRight />
                </div>
              </div>
            </div>
            {/* END DETAILS PANEL */}
          </div>
        );
      })}
    </div>
  );
}
