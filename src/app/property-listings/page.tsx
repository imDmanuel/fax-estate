import React from "react";
import { AllPropertyListings } from "../../components/all-property-listings";
import Hero from "@/components/hero";

export default function PropertyListings() {
  return (
    <main>
      <Hero
        title="Property Listings"
        breadcrumbs={[
          { title: "Property Listings", href: "/property-listings" },
        ]}
      />
      {/* ALL LISTINGS */}
      <section className="mt-20">
        <div className="container">
          <AllPropertyListings />
        </div>
      </section>
      {/* END ALL LISTINGS */}
    </main>
  );
}
