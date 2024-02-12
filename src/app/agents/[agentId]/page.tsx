import { ListingGrid } from "@/components/listing-grid";
import { Button } from "@/components/ui/button";
import { agents, listing } from "@/lib/mock-data";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa6";
import { client } from "../../../../sanity/lib/client";
import { groq } from "next-sanity";
import { Agent, Property } from "@/lib/query-types";

// NonNullable<Agent["socials"]>
const SocialsIcon: any = {
  facebook: FaFacebookF,
  instagram: FaInstagram,
  twitter: FaXTwitter,
}!;

const fetchAgentQuery = groq`*[_type=="agent" && slug.current==$slug][0]{
  ...,
  "imageUrl": image.asset->url,
  "agentListings":  *[_type=="property" && references(^._id)]{
    ...,
    "propertyImageUrl": propertyImage.asset->url,
  }
}`;

// const fetchAgentListingsQuery = groq`*[_type=="property" && references(*[_type=="agent"]._id)]{
//   ...,
//   'imageUrl': image.asset->url
// }`;

async function fetchAgentDetails(slug: string) {
  const agent = await client.fetch<Agent & { agentListings: Property[] }>(
    fetchAgentQuery,
    { slug }
  );
  return agent;
}

// async function fetchAgentListings(slug: string) {
//   const agentListing = await client.fetch<Property[]>(fetchAgentListingsQuery, {
//     slug,
//   });
//   return agentListing;
// }

export default async function AgentProfile({
  params,
}: {
  params: { agentId: string };
}) {
  console.log(params.agentId);
  const agent = await fetchAgentDetails(params.agentId);
  // const agentListing = await fetchAgentListings(params.agentId);
  const agentListing = agent.agentListings;

  // TODO: CREATE AGENTS DETAILS NOT FOUND PAGE
  if (!agent) {
    notFound();
  }

  return (
    <main>
      <section>
        <div className="container">
          {/* INFO CARD */}
          <div className="border border-gray-300 p-3 flex flex-col md:flex-row items-center gap-6 mt-10">
            <div className="relative">
              <Image
                // @ts-expect-error
                src={agent.imageUrl}
                className="w-[350px] h-[400px]"
                alt=""
                width={600}
                height={700}
              />

              {/* SOCIALS */}
              <div className="flex flex-col space-y-4 absolute top-6 left-6">
                {agent.socials &&
                  Object.keys(agent.socials).map((key) => {
                    const Icon = SocialsIcon[key];
                    return (
                      <Link
                        className="shrink-0 size-8 grid place-items-center bg-primary text-gray-700"
                        key={key}
                        // @ts-expect-error
                        href={`${agent.socials[key]}`}
                      >
                        <Icon />
                      </Link>
                    );
                  })}
              </div>
              {/* END SOCIALS */}
            </div>

            {/* AGENT DETAILS */}
            <div>
              <div className="text-xl font-semibold">{agent.name}</div>
              <div className="text-gray-600 text-sm capitalize">
                {agent.designation.split("-").join(" ")}
              </div>

              <p className="text-gray-600 text-sm my-5">{agent.bio}</p>

              <div className="font-semibold">Personalized Information</div>

              <ul className="flex space-x-3 flex-wrap text-sm text-gray-600 mt-2">
                <li>Current Listings: {agentListing.length}</li>
                <li>Experience Since: {agent.yearJoined}</li>
                <li>Locales: {agent.from}</li>
                <li>Language: {agent.language}</li>
              </ul>

              <div className="flex items-stretch md:items-center flex-col md:flex-row md:space-x-4 max-md:space-y-2 mt-8">
                <Button className="flex items-center space-x-2">
                  <FaEnvelope />
                  <div>Send Email</div>
                </Button>
                <Button
                  variant="outline"
                  className="flex items-center space-x-2"
                >
                  <FaPhone />
                  <div>{agent.phone}</div>
                </Button>
              </div>
            </div>
            {/* END AGENT DETAILS */}
          </div>
          {/* END INFO CARD */}
        </div>
      </section>

      <section className="mt-24">
        <div className="container">
          <div className="flex items-center mb-6">
            <div className="font-semibold text-lg">Broker Listings</div>

            <span className="border-b border-b-gray-900 pl-5 text-sm ml-auto">
              {agentListing.length}{" "}
              {agentListing.length == 1 ? "Property" : "Properties"}
            </span>
          </div>

          <ListingGrid listing={agentListing} />
        </div>
      </section>
    </main>
  );
}

// 506/586
