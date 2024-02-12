/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <main className="mt-20 min-h-[70svh] grid place-items-center">
      <div className="container h-full grid place-items-center">
        <div className="text-center">
          <div className="text-8xl text-secondary font-semibold">404</div>
          <div className="lg-xl text-secondary mt-3 font-semibold">
            Oops! Page can't be found.
          </div>
          <p className="text-sm text-secondary py-3 font-light">
            We are really sorry but the page you requested is missing, Go back
            to the home page.
          </p>

          <Link href={"/"}>
            <Button className="font-semibold">Go Back..</Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
