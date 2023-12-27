import { Button } from "@/components/ui/button";
import Image from "next/image";
import heroImage from "@/assets/images/hero-image-2.png";
import house1 from "@/assets/images/house-1.jpg";
import house2 from "@/assets/images/house-2.jpg";
import house3 from "@/assets/images/house-3.jpg";
import choicesIcon from "@/assets/icons/choices.png";
import economyIcon from "@/assets/icons/economy.png";
import homeIcon from "@/assets/icons/home.png";
import saveMoneyIcon from "@/assets/icons/save-money.png";
import { HeroSearchForm } from "@/components/hero-search-form";
import { LatestListings } from "@/components/latest-listings";

export default function Home() {
  return (
    <main className="">
      {/* HERO SECTION */}
      <section className="z-10 relative bg-light-blue min-h-[80svh] flex items-center">
        <div className="container">
          <Image
            className="-z-10 absolute bottom-0 right-0 "
            src={heroImage}
            alt=""
            width={700}
          />
          {/* <div className="w-full"> */}
          {/* TAGLINE */}
          <div className="max-w-xl">
            <h1 className="font-merriweather text-secondary">
              Building houses that feel <br />
              like home - with us.
            </h1>
            <p className="pt-4 text-teal-blue">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              fugiat natus doloribus iusto vero error id
            </p>
          </div>
          {/* END TAGLINE */}

          <HeroSearchForm />
          {/* </div> */}
        </div>
      </section>
      {/* END HERO SECTION */}

      {/* WE HELP CLIENTS SECTION */}
      <section className="mt-32">
        <div className="container grid grid-cols-2 items-center gap-20">
          {/* IMAGE */}
          <div className="grid grid-cols-2 grid-rows-2 gap-8">
            <Image
              src={house1}
              alt="House"
              className="row-span-2 w-full h-full object-cover py-8"
            />
            <Image
              src={house2}
              alt="House"
              className="w-full h-full object-cover"
            />
            <Image
              src={house3}
              alt="House"
              className="w-full h-full object-cover"
            />
          </div>
          {/* END IMAGE */}

          {/* CONTENT */}
          <div>
            <h2 className="font-merriweather">
              We help clients buy and sell houses since 2001
            </h2>

            <p className="pt-4 pb-8 text-teal-blue">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
              ipsa aperiam. Vero voluptatibus voluptates beatae officiis,
              pariatur commodi exercitationem cupiditate necessitatibus!
            </p>

            <div className="grid grid-cols-2 gap-8">
              {/* SELL YOUR HOME */}
              <div className="grid grid-cols-[4rem_1fr] items-center gap-4">
                <Image src={saveMoneyIcon} alt="" width={50} />

                <div className="">
                  <h4>Sell your home</h4>
                  <p>Free Services</p>
                </div>
              </div>
              {/* END SELL YOUR HOME */}

              {/* BUY A HOME */}
              <div className="grid grid-cols-[4rem_1fr] items-center gap-4">
                <Image src={economyIcon} alt="" width={50} />

                <div className="">
                  <h4>Buy a home</h4>
                  <p>No fees asked</p>
                </div>
              </div>
              {/* END BUY A HOME */}

              {/* FREE APPRAISAL */}
              <div className="grid grid-cols-[4rem_1fr] items-center gap-4">
                <Image src={choicesIcon} alt="" width={50} />

                <div className="">
                  <h4>Free Appraisal</h4>
                  <p>No fees asked</p>
                </div>
              </div>
              {/* END FREE APPRAISAL */}

              {/* FREE PHOTOSHOOT */}
              <div className="grid grid-cols-[4rem_1fr] items-center gap-4">
                <Image src={homeIcon} alt="" width={50} />

                <div className="">
                  <h4>Free Photoshoot</h4>
                  <p>Professional services</p>
                </div>
              </div>
              {/* END FREE PHOTOSHOOT */}
            </div>

            <Button className="mt-12">More Details</Button>
          </div>
          {/* END CONTENT */}
        </div>
      </section>
      {/* END WE HELP CLIENTS SECTION */}

      {/* NEIGHBOURHOOD EXPLORATION SECTION */}
      {/* END NEIGHBOURHOOD EXPLORATION SECTION */}

      {/* LATEST REAL ESTATE LISTINGS */}
      <section className="mt-32">
        <div className="container">
          <h2 className="font-merriweather text-center max-w-md mx-auto mb-8">
            Check Out the Latest Real Estate Listings.
          </h2>

          <LatestListings />
        </div>
      </section>
      {/* END LATEST REAL ESTATE LISTINGS */}

      {/* PATH TO DISCOVERY SECTION */}
      {/* END PATH TO DISCOVERY SECTION */}

      {/* PARTNERS */}
      {/* END PARTNERS */}
    </main>
  );
}
