import React from "react";
import GoogleMapReact from "google-map-react";

type Position = {
  lat: number;
  lng: number;
};

export default function PropertyMap({
  position,
}: {
  position: { lat: number; lng: number };
}) {
  return (
    <GoogleMapReact
      bootstrapURLKeys={{
        key: process.env.NEXT_PUBLIC_GOOGLE_API_KEY as string,
      }}
      defaultCenter={position}
      defaultZoom={10}
    />
  );
}
