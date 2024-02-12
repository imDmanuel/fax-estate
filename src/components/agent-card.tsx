import { Agent } from "@/lib/query-types";
import Image from "next/image";
import React from "react";

export default function AgentCard({ agent }: { agent: Agent }) {
  return (
    <div className="border rounded border-gray-300 min-w-60">
      {/* IMAGE */}
      <div className="p-6 relative">
        <Image
          className="size-44 rounded-full mx-auto"
          // @ts-expect-error
          src={agent.imageUrl}
          width={600}
          height={600}
          alt=""
        />
      </div>
      {/* END IMAGE */}

      {/* DETAILS */}
      <div className="border-t border-gray-300 rounded px-3 py-4">
        {/* NAME */}
        <div className="font-semibold">{agent.name}</div>
        {/* END NAME */}

        {/* DESIGNATION */}
        <div className="text-xs text-gray-400 mt-2 capitalize">
          {agent.designation.split("-").join(" ")}
        </div>
        {/* END DESIGNATION */}
      </div>
      {/* END DETAILS */}
    </div>
  );
}
