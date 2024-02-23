"use client";

import { Property } from "@/lib/query-types";
import React from "react";
import Youtube from "react-youtube";
import ReactPlayer from "react-player";

export default function PropertyVideo({
  video,
}: {
  video: Property["youtubeVideo"];
}) {
  return (
    <div className="flex justify-center">
      {/* <Youtube
        videoId={video?.video.id}
        opts={{
          height: "390",
          width: "640",
        }}
        className="max-w-full"
      /> */}

      <ReactPlayer url={`https://www.youtube.com/watch?v=${video?.video.id}`} />
    </div>
  );
}
