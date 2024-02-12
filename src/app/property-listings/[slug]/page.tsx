import React from "react";
import {
  FaCircleCheck,
  FaHeart,
  FaPhone,
  FaPlus,
  FaPrint,
  FaShareNodes,
  FaShower,
} from "react-icons/fa6";
import { FaEnvelope, FaTimesCircle } from "react-icons/fa";
import { listing } from "@/lib/mock-data";
import { notFound } from "next/navigation";
import { FiClock, FiMapPin, FiSquare } from "react-icons/fi";
import { IoBedOutline } from "react-icons/io5";
import { ScheduleTourForm } from "@/components/schedule-tour-form";
import { client } from "../../../../sanity/lib/client";
import { groq } from "next-sanity";
import { Agent, Property } from "@/lib/query-types";
import Image from "next/image";
import Hero from "@/components/hero";

const fetchPropertyDetailsQuery = groq`*[_type=="property" && slug.current == $slug][0]{
  ...,
  "propertyImageUrl": propertyImage.asset->url,
  "floorPlansUrl": floorPlans.asset->url,
  agent->{
    ...,
    "imageUrl": image.asset->url
  }
}`;

export default async function PropertyListings({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const propertyDetails = await client.fetch<
    Property & {
      agent: Agent;
    }
  >(fetchPropertyDetailsQuery, { slug });

  if (!propertyDetails) {
    notFound();
  }

  return (
    <main>
      <Hero
        title="Property Listings"
        breadcrumbs={[
          {
            title: "PROPERTY DETAILS",
            href: `/property-listings/${propertyDetails.slug.current}`,
          },
        ]}
      />

      {/* IMAGE SLIDER */}
      <section className="mt-20">
        <div className="container">
          {/*  */}
          {/* TODO: IMPLEMENT IMAGE SLIDER */}
          {/*  */}
        </div>
      </section>
      {/* IMAGE SLIDER */}

      <section>
        <div className="container flex flex-col md:flex-row gap-6">
          {/* LEFT SECTION */}
          <div>
            {/* PROPERTY DETAILS */}
            <div className="bg-white p-6">
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                {/* TITLE */}
                <div className="text-xl font-merriweather font-bold">
                  {propertyDetails.name}
                </div>
                {/* END TITLE */}

                {/* ACTIONS */}
                <div className="flex space-x-2">
                  <div className="bg-white text-sm hover:bg-primary transition-colors border border-gray-200 text-gray-500 hover:text-gray-800 cursor-pointer rounded-full size-8 grid place-items-center">
                    <FaShareNodes />
                  </div>
                  <div className="bg-white text-sm hover:bg-primary transition-colors border border-gray-200 text-gray-500 hover:text-gray-800 cursor-pointer rounded-full size-8 grid place-items-center">
                    <FaHeart />
                  </div>
                  <div className="bg-white text-sm hover:bg-primary transition-colors border border-gray-200 text-gray-500 hover:text-gray-800 cursor-pointer rounded-full size-8 grid place-items-center">
                    <FaPlus />
                  </div>
                  <div className="bg-white text-sm hover:bg-primary transition-colors border border-gray-200 text-gray-500 hover:text-gray-800 cursor-pointer rounded-full size-8 grid place-items-center">
                    <FaPrint />
                  </div>
                </div>
                {/* END ACTIONS */}
              </div>

              <div className="text-gray-600 flex items-center flex-wrap gap-x-5 gap-y-3 mt-3">
                {/* ADDRESS */}
                <div className="flex items-center text-sm space-x-1">
                  <FiMapPin className="text-xl" />

                  <div>{propertyDetails.address}</div>
                </div>
                {/* END ADDRESS */}

                {/* STATUS */}
                <div className="bg-primary text-black font-semibold px-4 py-0.5 inline-block">
                  {propertyDetails.listingType}
                </div>
                {/* END STATUS */}

                {/* UPLOAD DATE */}
                <div className="flex items-center text-sm space-x-1">
                  <FiClock className="text-xl" />
                  <div>{propertyDetails.uploadDate || "N/A"}</div>
                </div>
                {/* END UPLOAD DATE */}

                {/* PRICE */}
                <div className="font-semibold text-lg">
                  ${propertyDetails.price}
                </div>
                {/* END PRICE */}
              </div>

              {/* ADDITIONAL INFORMATION */}
              <div className="flex flex-wrap gap-4 text-sm text-gray-600 mt-7">
                <div className="flex space-x-2 items-center">
                  <div className="size-8 border-2 rounded-full p-2 grid place-items-center">
                    <IoBedOutline className="text-xs" />
                  </div>
                  <div>{propertyDetails.bedrooms} Bedroom(s)</div>
                </div>

                <div className="flex space-x-2 items-center">
                  <div className="size-8 border-2 rounded-full p-2 grid place-items-center">
                    <FaShower className="text-xs" />
                  </div>
                  <div>{propertyDetails.bathrooms} Bathroom(s)</div>
                </div>

                <div className="flex space-x-2 items-center">
                  <div className="size-8 border-2 rounded-full p-2 grid place-items-center">
                    <FiSquare className="text-xs" />
                  </div>
                  <div>{propertyDetails.size} Sq Ft</div>
                </div>
              </div>
              {/* END ADDITIONAL INFORMATION */}
            </div>
            {/* END PROPERTY DETAILS */}

            {/* DESCRIPTION */}
            <div className="bg-white p-6 mt-6 text-gray-600">
              <div className="font-bold font-merriweather text-lg">
                Description
              </div>

              <p className="mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                amet non libero magnam porro, optio nostrum corporis hic ab
                obcaecati eum asperiores esse aliquid quos, assumenda iure
                voluptates dignissimos totam.
              </p>
              <p className="mt-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
                voluptatem nesciunt doloremque aspernatur, minus, voluptatum
                enim blanditiis maiores a illum pariatur mollitia. Reprehenderit
                eum vel facere ipsa, repellat voluptatibus distinctio.
              </p>
            </div>
            {/* END DESCRIPTION */}

            {/* OTHER PROPERTY DETAILS */}
            <div className="bg-white p-6 mt-6 font-merriweather">
              <div className="font-bold font-merriweather text-lg">
                Property Details
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-3 mt-3">
                <div className="flex gap-2">
                  <span className="font-medium">Property ID:</span>
                  <span className="ml-auto text-right">
                    {propertyDetails.slug.current || "N/A"}
                  </span>
                </div>
                <div className="flex gap-2">
                  <span className="font-medium">Property Price:</span>
                  <span className="ml-auto text-right">
                    {propertyDetails.price || "N/A"}
                  </span>
                </div>
                <div className="flex gap-2">
                  <span className="font-medium">Property Type:</span>
                  <span className="ml-auto text-right">
                    {propertyDetails.listingType || "N/A"}
                  </span>
                </div>
                <div className="flex gap-2">
                  <span className="font-medium">Garages:</span>
                  <span className="ml-auto text-right">
                    {propertyDetails.garages || "N/A"}
                  </span>
                </div>
                <div className="flex gap-2">
                  <span className="font-medium">Property Status:</span>
                  <span className="ml-auto text-right">
                    {propertyDetails.listingType || "N/A"}
                  </span>
                </div>
                <div className="flex gap-2">
                  <span className="font-medium">Bedrooms:</span>
                  <span className="ml-auto text-right">
                    {propertyDetails.bedrooms || "N/A"}
                  </span>
                </div>
                <div className="flex gap-2">
                  <span className="font-medium">Originating Year:</span>
                  <span className="ml-auto text-right">
                    {propertyDetails.originatingYear || "N/A"}
                  </span>
                </div>
              </div>

              <div className="mt-8">
                <div className="font-bold font-merriweather text-lg text-black">
                  Facilities
                </div>
                <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6">
                  <div className="flex items-center space-x-2">
                    {propertyDetails.facilities?.airConditioning === true ? (
                      <FaCircleCheck className="text-lg text-green-500" />
                    ) : (
                      <FaTimesCircle className="text-lg text-red-500" />
                    )}
                    <span className="font-medium">Air Cond.</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    {propertyDetails.facilities?.balcony === true ? (
                      <FaCircleCheck className="text-lg text-green-500" />
                    ) : (
                      <FaTimesCircle className="text-lg text-red-500" />
                    )}
                    <span className="font-medium">Balcony</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    {propertyDetails.facilities?.internet === true ? (
                      <FaCircleCheck className="text-lg text-green-500" />
                    ) : (
                      <FaTimesCircle className="text-lg text-red-500" />
                    )}
                    <span className="font-medium">Internet</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    {propertyDetails.facilities?.lawn === true ? (
                      <FaCircleCheck className="text-lg text-green-500" />
                    ) : (
                      <FaTimesCircle className="text-lg text-red-500" />
                    )}
                    <span className="font-medium">Lawn</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    {propertyDetails.facilities?.dishwasher === true ? (
                      <FaCircleCheck className="text-lg text-green-500" />
                    ) : (
                      <FaTimesCircle className="text-lg text-red-500" />
                    )}
                    <span className="font-medium">Dishwasher</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    {propertyDetails.facilities?.bedding === true ? (
                      <FaCircleCheck className="text-lg text-green-500" />
                    ) : (
                      <FaTimesCircle className="text-lg text-red-500" />
                    )}
                    <span className="font-medium">Bedding</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    {propertyDetails.facilities?.cableTV === true ? (
                      <FaCircleCheck className="text-lg text-green-500" />
                    ) : (
                      <FaTimesCircle className="text-lg text-red-500" />
                    )}
                    <span className="font-medium">Cable TV</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    {propertyDetails.facilities?.gym === true ? (
                      <FaCircleCheck className="text-lg text-green-500" />
                    ) : (
                      <FaTimesCircle className="text-lg text-red-500" />
                    )}
                    <span className="font-medium">Gym</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    {propertyDetails.facilities?.parking === true ? (
                      <FaCircleCheck className="text-lg text-green-500" />
                    ) : (
                      <FaTimesCircle className="text-lg text-red-500" />
                    )}
                    <span className="font-medium">Parking</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    {propertyDetails.facilities?.pool === true ? (
                      <FaCircleCheck className="text-lg text-green-500" />
                    ) : (
                      <FaTimesCircle className="text-lg text-red-500" />
                    )}
                    <span className="font-medium">Pool</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    {propertyDetails.facilities?.fridge === true ? (
                      <FaCircleCheck className="text-lg text-green-500" />
                    ) : (
                      <FaTimesCircle className="text-lg text-red-500" />
                    )}
                    <span className="font-medium">Fridge</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    {propertyDetails.facilities?.pool === true ? (
                      <FaCircleCheck className="text-lg text-green-500" />
                    ) : (
                      <FaTimesCircle className="text-lg text-red-500" />
                    )}
                    <span className="font-medium">Swim.. Pool</span>
                  </div>
                </div>
              </div>
            </div>
            {/* END OTHER PROPERTY DETAILS */}

            {/* FLOOR PLANS */}
            <div className="bg-white p-6 mt-6">
              <div className="font-bold font-merriweather text-2xl mb-4">
                Floor Plans
              </div>

              <Image
                src={propertyDetails.floorPlansUrl}
                alt=""
                width="700"
                height="700"
                className="w-full "
              />
            </div>
            {/* END FLOOR PLANS */}

            {/* MAP LOCATION */}
            <div className="bg-white p-6 mt-6">
              <div className="font-bold font-merriweather text-2xl mb-4">
                Map Location
              </div>
            </div>
            {/* END MAP LOCATION */}

            {/* PROPERTY VIDEO */}
            <div className="bg-white p-6 mt-6">
              <div className="font-bold font-merriweather text-2xl mb-4">
                Property video
              </div>
            </div>
            {/* END PROPERTY VIDEO */}

            {/* CRITICS REVIEWS */}
            <div className="bg-white p-6 mt-6">
              <div className="font-bold font-merriweather text-2xl mb-4">
                Critics review
              </div>
            </div>
            {/* END CRITICS REVIEWS */}

            {/* LEAVE A REVIEW */}
            <div className="bg-white p-6 mt-6">
              <div className="font-bold font-merriweather text-2xl mb-4">
                Leave a review
              </div>
            </div>
            {/* END LEAVE A REVIEW */}
          </div>
          {/* END LEFT SECTION */}

          {/* RIGHT SECTION */}
          <div className="md:shrink-0 md:w-[350px]">
            <div className="bg-white p-6">
              <div className="font-bold font-merriweather text-2xl mb-4 text-black">
                Schedule a tour
              </div>

              {/* SCHEDULE A TOUR FORM */}
              <ScheduleTourForm />
              {/* END SCHEDULE A TOUR FORM */}
            </div>

            {/* LISTING AGENT */}
            <div className="bg-white p-6 mt-6">
              <Image
                src={propertyDetails.agent.imageUrl!}
                alt=""
                width={500}
                height={700}
                className="mx-auto"
              />
              <div className="pb-5">
                <div className="font-merriweather font-semibold">
                  {propertyDetails.agent.name}
                </div>
                <div className="text-sm text-gray-500 mt-1 capitalize">
                  {propertyDetails.agent.designation.split("-").join(" ")}
                </div>
              </div>

              <div className="pt-5 border-t">
                <div className="flex items-center space-x-2 mt-1">
                  <FaPhone className="text-[#f15a29]" />
                  <div className="text-gray-500">
                    {propertyDetails.agent.phone}
                  </div>
                </div>
                <div className="flex items-center space-x-2 mt-1">
                  <FaEnvelope className="text-[#f15a29]" />
                  <div className="text-gray-500">
                    {propertyDetails.agent.email}
                  </div>
                </div>

                <div className="mt-1 space-x-2">
                  <span className="font-medium">Organisation</span>
                  <span className="text-gray-500">Garden Hills</span>
                </div>
              </div>
            </div>
            {/* END LISTING AGENT */}
          </div>
          {/* END RIGHT SECTION */}
        </div>
      </section>

      {/* RELATED PROPERTIES */}
      {/* TODO: IMPLEMENT RELATED PROPERTIES */}
      {/* END RELATED PROPERTIES */}
    </main>
  );
}
