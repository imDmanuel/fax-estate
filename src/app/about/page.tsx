import Hero from "@/components/hero";
import React from "react";

export default function AboutPage() {
  return (
    <main>
      <section>
        <Hero title="" breadcrumbs={[{ title: "ABOUT US", href: "about" }]} />
      </section>
    </main>
  );
}
