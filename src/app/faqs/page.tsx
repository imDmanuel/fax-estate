import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";

export default function Faqs() {
  return (
    <main>
      <section className="my-32">
        <div className="container">
          <div className="mb-10 text-2xl text-center max-w-md mx-auto font-semibold">
            Frequently Asked Questions (FAQ) <br /> On [Company Name]
          </div>

          {/* ACCORDIONS */}
          <div className="max-w-xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  What is the first step of the buying process?
                </AccordionTrigger>
                <AccordionContent>
                  At our delivery company, we understand the anticipation of
                  awaiting your package. Rest assured, your shipment is securely
                  stored in our state-of-the-art facilities, strategically
                  located across regions for efficient distribution. With our
                  advanced tracking system, you can pinpoint the exact location
                  of your order within our network, ensuring peace of mind until
                  it reaches your doorstep.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  How should I prepare my house before selling it?
                </AccordionTrigger>
                <AccordionContent>
                  Returning an item purchased online with us is hassle-free.
                  Simply initiate the return process through our website or
                  contact our customer service team. We offer convenient return
                  options, including drop-off points or scheduled pickups,
                  making it easy for you to send back the item. Our dedicated
                  support team will guide you through the steps, ensuring a
                  smooth and efficient return experience. Your satisfaction is
                  our priority, and we&apos;re here to assist you every step of
                  the way.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  Should I sell my current property before buying a new one?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, you can cancel or change your order with us. We
                  understand that plans can change, so we offer flexibility in
                  managing your orders. Simply log in to your account on our
                  website or contact our customer service team to request
                  changes or cancellations. We strive to accommodate your needs
                  and ensure a seamless experience with our services.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  I have a promotional or discount code?
                </AccordionTrigger>
                <AccordionContent>
                  We love rewarding our customers. If you have a promotional or
                  discount code, you can apply it during the checkout process on
                  our website. Simply enter the code in the designated field,
                  and the discount will be automatically applied to your order
                  total. Enjoy the savings and thank you for choosing us for
                  your delivery needs!
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>
                  What are the delivery types you use?
                </AccordionTrigger>
                <AccordionContent>
                  We offer a variety of delivery types to suit your needs. From
                  standard shipping for cost-effective delivery to express
                  shipping for urgent packages, we ensure your items reach you
                  promptly and securely. Additionally, we provide options such
                  as tracked shipping for added peace of mind and specialty
                  services like same-day delivery in select areas. Whatever your
                  delivery requirements, we have a solution tailored to you.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>
                  How can I pay for my purchase?
                </AccordionTrigger>
                <AccordionContent>
                  We offer convenient payment options to suit your preferences.
                  You can pay for your purchase using various methods including
                  credit or debit cards, online payment gateways, and in some
                  locations, cash on delivery. Our secure payment systems ensure
                  your transactions are safe and hassle-free, allowing you to
                  complete your purchase with confidence.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          {/* END ACCORDIONS */}
        </div>
      </section>
    </main>
  );
}
