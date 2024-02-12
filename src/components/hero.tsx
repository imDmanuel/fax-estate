import { routes } from "@/lib/routes";
import Image from "next/image";
import React from "react";
import heroImage from "@/assets/images/hero.jpg";
import { LuHome, LuDot } from "react-icons/lu";
import Link from "next/link";

export default function Hero({
  title,
  breadcrumbs,
}: {
  title: string;
  breadcrumbs: (typeof routes)[number][];
}) {
  return (
    <>
      <div className="relative h-70 w-full overflow-hidden after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 after:bg-gray-800/50 text-white">
        <Image
          src={heroImage}
          alt=""
          className="w-full h-[70svh] object-cover"
        />
        <div className="absolute z-10 top-0 left-0 right-0 bottom-0 flex items-center  justify-center flex-col">
          <div className="text-4xl">{title}</div>

          <div className="flex items-center space-x-1 text-base mt-2 uppercase">
            <LuHome className="text-lg" />
            <Link href="/">HOME</Link>
            <LuDot />
            <div className="space-x-2">
              {breadcrumbs.map((breadcrumb) => (
                <Link href={breadcrumb.href} key={breadcrumb.href}>
                  {breadcrumb.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/*
<picture className="absolute top-0 left-0 right-0 bottom-0 object-cover">
          <source
            srcSet="https://static.rdc.moveaws.com/images/hero/default/2021-11/webp/hp-hero-mobile.webp, https://static.rdc.moveaws.com/images/hero/default/2021-11/webp/hp-hero-mobile-2x.webp 2x"
            media="(max-width: 767px)"
            type="image/webp"
          />
          <source
            srcSet="https://static.rdc.moveaws.com/images/hero/default/2021-11/webp/hp-hero-tablet.webp, https://static.rdc.moveaws.com/images/hero/default/2021-11/webp/hp-hero-tablet-2x.webp 2x"
            media="(min-width: 768px) and (max-width: 995px)"
            type="image/webp"
          />
          <source
            srcSet="https://static.rdc.moveaws.com/images/hero/default/2021-11/webp/hp-hero-desktop.webp, https://static.rdc.moveaws.com/images/hero/default/2021-11/webp/hp-hero-desktop-2x.webp 2x"
            media="(min-width: 996px) and (max-width: 1279px)"
            type="image/webp"
          />
          <source
            srcSet="https://static.rdc.moveaws.com/images/hero/default/2021-11/webp/hp-hero-desktop-xl.webp, https://static.rdc.moveaws.com/images/hero/default/2021-11/webp/hp-hero-desktop-xl-2x.webp 2x"
            media="(min-width: 1280px)"
            type="image/webp"
          />
          <img
            data-src="https://static.rdc.moveaws.com/images/hero/default/2021-11/jpg/hp-hero-desktop.jpg"
            data-testid="picture-img"
            alt="realtor.com for sale home page"
            src="https://static.rdc.moveaws.com/images/hero/default/2021-11/jpg/hp-hero-desktop.jpg"
            srcSet="https://static.rdc.moveaws.com/images/hero/default/2021-11/jpg/hp-hero-mobile.jpg 480w, https://static.rdc.moveaws.com/images/hero/default/2021-11/jpg/hp-hero-tablet.jpg 768w, https://static.rdc.moveaws.com/images/hero/default/2021-11/jpg/hp-hero-desktop.jpg 996w, https://static.rdc.moveaws.com/images/hero/default/2021-11/jpg/hp-hero-desktop-xl.jpg 1280w"
            role="presentation"
          />
        </picture>
*/
