import AgentCard from "@/components/agent-card";
import { agents } from "@/lib/mock-data";
import Link from "next/link";
import React from "react";
import { client } from "../../../sanity/lib/client";
import { Agent } from "@/lib/query-types";
import { groq } from "next-sanity";

const agentsQuery = groq`*[_type=='agent']{
  ...,
  'imageUrl': image.asset->url
}`;

export default async function Agents() {
  const agents = await client.fetch<Agent[]>(agentsQuery);

  return (
    <main>
      <section className="mt-20">
        <div className="container">
          <div className="font-bold text-3xl text-center mt-3 mb-8">
            Meet the Realty Professionals
          </div>

          <div className="flex gap-5 flex-wrap justify-center">
            {agents.map((agent) => (
              <Link
                key={agent.slug.current}
                href={`/agents/${agent.slug.current}`}
              >
                <AgentCard agent={agent} />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
