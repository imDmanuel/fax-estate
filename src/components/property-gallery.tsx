"use client";

import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Image from "next/image";
import { Property } from "@/lib/query-types";
import { type CarouselApi } from "@/components/ui/carousel";
import AutoPlay from "embla-carousel-autoplay";

export default function PropertyGallery({
  propertyImagesUrl,
}: {
  propertyImagesUrl: NonNullable<Property["propertyImagesUrl"]>;
}) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="relative">
      <div className="after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 after:bg-gray-800/50">
        <Image
          src={propertyImagesUrl[current]}
          alt=""
          width={1000}
          height={700}
          className="w-full h-80 md:h-96 lg:h-[30rem] max-h-full object-cover"
        />
      </div>
      <Carousel
        className="mx-14 absolute bottom-6"
        opts={{
          loop: "true",
        }}
        setApi={setApi}
        plugins={[
          AutoPlay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent>
          {propertyImagesUrl.map((propertyImageUrl) => {
            return (
              <CarouselItem
                key={propertyImageUrl}
                className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6 aspect-video"
              >
                <Image
                  width={700}
                  height={500}
                  src={`${propertyImageUrl}`}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
