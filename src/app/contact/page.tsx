"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import phoneIcon from "@/assets/icons/inbound.png";
import mapIcon from "@/assets/icons/location-pin(1).png";
import emailIcon from "@/assets/icons/newsletter.png";

const formSchema = z.object({
  name: z.string(),
  email: z.number().int().positive().gt(0),
  phone: z.number().int().positive().gt(0),
  subject: z.string(),
  message: z.string(),
});

export default function ContactPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });
  return (
    <main>
      <section className="mt-20">
        <div className="container flex flex-col md:flex-row gap-16 max-w-5xl mx-auto">
          {/* CONTACT DETAILS */}
          <div className="md:basis-2/5">
            <div className="space-y-6">
              <div className="font-semibold text-3xl pb-4">Get In Touch</div>

              <div className="flex items-center space-x-2">
                {/* ICON */}
                <Image
                  alt=""
                  src={mapIcon}
                  width={140}
                  height={140}
                  className="w-12"
                />
                {/* END ICON */}
                <div>
                  <div className="text-sm text-gray-500">Office address</div>
                  <div className="font-semibold">
                    New York, NY 10128, United States
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                {/* ICON */}
                <Image
                  alt=""
                  src={phoneIcon}
                  width={140}
                  height={140}
                  className="w-12"
                />
                {/* END ICON */}
                <div>
                  <div className="text-sm text-gray-500">Phone</div>
                  <div className="font-semibold">+2384787587878</div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                {/* ICON */}
                <Image
                  alt=""
                  src={emailIcon}
                  width={140}
                  height={140}
                  className="w-12"
                />
                {/* END ICON */}
                <div>
                  <div className="text-sm text-gray-500">Office address</div>
                  <div className="font-semibold">email@example.com</div>
                </div>
              </div>
            </div>
          </div>
          {/* END CONTACT DETAILS */}

          {/* CONTACT FORM */}
          <Form {...form}>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center py-6">
              {/* YOUR NAME */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Your Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* END YOUR NAME */}

              {/* YOUR EMAIL */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Your Email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* END YOUR EMAIL */}

              {/* PHONE NUMBER */}
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Phone Number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* END PHONE NUMBER */}

              {/* SUBJECT */}
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Subject" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* END SUBJECT */}

              {/* MESSAGE */}
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="md:col-span-2">
                    <FormControl>
                      <textarea
                        rows={6}
                        className="border border-input w-full pl-0 bg-transparent text-gray-300 placeholder:text-gray-400"
                        {...field}
                        placeholder="Message"
                      ></textarea>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* END MESSAGE */}

              {/* SEND BUTTON */}
              <div>
                <Button className="mt-1">Send</Button>
              </div>
              {/* END SEND BUTTON */}
            </form>
          </Form>
          {/* END CONTACT FORM */}
        </div>
      </section>

      {/* TODO: PUT MAP */}
    </main>
  );
}
