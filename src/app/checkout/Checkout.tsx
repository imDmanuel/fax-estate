import BillingDetailsForm from "@/components/billing-details-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FormSchema } from "./page";

export default function Checkout() {
  const form = useForm<z.infer<typeof FormSchema>>();
  return (
    <main>
      <section className="mt-20">
        <div className="container flex space-x-6">
          {/* BILLING DETAILS */}
          <div className="bg-white px-5 py-8 w-full shrink-[3]">
            <div className="text-xl font-bold mb-4">Billing Details</div>

            <BillingDetailsForm />
          </div>
          {/* END BILLING DETAILS */}
          <div className="text-sm">
            <div className="bg-white px-5 py-8 basis-[450px] space-y-8">
              {/* PROPERTY & PRICING DETAILS */}
              <div className="space-y-6">
                {/* PROPERTY DETAILS */}
                <div>
                  <div className="text-xl font-bold mb-5">Property Details</div>

                  <div className="space-y-3">
                    <div>
                      <span>Property Address</span>
                      <span></span>
                    </div>
                    <div>
                      <span>Property type</span>
                      <span></span>
                    </div>
                    <div>
                      <span>No. of Bedrooms</span>
                      <span></span>
                    </div>
                    <div>
                      <span>No. of Bathrooms</span>
                      <span></span>
                    </div>
                    <div>
                      <span>Property sq. footage</span>
                      <span></span>
                    </div>
                  </div>
                </div>
                {/* END PROPERTY DETAILS */}

                {/* PRICING DETAILS */}
                <div>
                  <div className="text-xl font-bold mb-5">Pricing Details</div>

                  <div className="space-y-3">
                    <div>
                      <span>Total price</span>
                      <span></span>
                    </div>

                    <div>
                      <span>Realtor fee</span>
                      <span></span>
                    </div>

                    <div>
                      <span>Taxes</span>
                      <span></span>
                    </div>
                  </div>
                </div>
                {/* END PRICING DETAILS */}
              </div>
              {/* END PROPERTY & PRICING DETAILS */}

              {/* TERMS AND CONDITIONS */}
              <div>
                <div className="text-xl font-bold mb-5">
                  Terms and Conditions
                </div>

                <div className="space-y-3">
                  <div>
                    <span>
                      Do you accept the terms of sale or purchase agreement?
                    </span>
                    <span></span>
                  </div>

                  <div>
                    <span>
                      Do you accpet our refund policy or cancellation terms?
                    </span>
                    <span></span>
                  </div>
                </div>
              </div>
              {/* END TERMS AND CONDITIONS */}

              {/* CONTACT INFORMATION */}
              <div>
                <div className="text-xl font-bold mb-5">
                  Realtor Contact Information
                </div>

                {/* TODO: PUT REALTOR AVATAR IMAGE HERE */}
              </div>
              {/* END CONTACT INFORMATION */}

              {/* ADDITIONAL INFORMATION */}
              <div>
                <div className="text-xl font-bold mb-5">
                  Additional Information
                </div>

                <div className="space-y-3">
                  <div>
                    <span>Insurance?</span>
                    <span></span>
                  </div>

                  <div>
                    <span>Financing options or mortgage calculator</span>
                  </div>
                </div>
              </div>
              {/* END ADDITIONAL INFORMATION */}
            </div>

            <div className="bg-white px-5 py-8 mt-6">
              {/* PAYMENT DETAILS */}
              <Form {...form}>
                <form>
                  <div className="text-xl font-bold mb-3">Payment</div>

                  <div>
                    <div>
                      <span>Direct bank transfer</span>
                    </div>
                  </div>
                </form>
              </Form>
              {/* END PAYMENT DETAILS */}

              {/* SUBMIT BUTTON */}
              <Button className="mt-1 w-full">Purchase</Button>
              {/* END SUBMIT BUTTON */}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
