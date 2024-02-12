"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";

import { Input } from "./ui/input";
import { Button } from "./ui/button";

const formSchema = z.object({
  firstName: z
    .string({ required_error: "First Name is required!" })
    .min(5, "Enter at least five (5) characters"),
  lastName: z.string().min(5, "Enter at least five (5) characters").optional(),
  email: z.string().email("Please enter a valid email!"),
  phoneNmber: z.string().optional(),
  message: z
    .string({ required_error: "Message to send is required!" })
    .min(20, "Please enter at least twenty (20) characters!")
    .max(300, "Message must not exceed 300 characters!"),
});

export function FooterContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  function onSubmit(values: z.infer<typeof formSchema>) {}

  return (
    <Form {...form}>
      <form className="grid grid-cols-1 lg:grid-cols-2 gap-3 items-center py-6">
        {/* FIRST NAME */}
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className="pl-0 bg-transparent border-x-transparent border-t-transparent text-gray-300 placeholder:text-gray-400"
                  placeholder="First name"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* END FIRST NAME */}

        {/* LAST NAME */}
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className="pl-0 bg-transparent border-x-transparent border-t-transparent text-gray-300 placeholder:text-gray-400"
                  placeholder="Last Name"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* END LAST NAME */}

        {/* EMAIL */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className="pl-0 bg-transparent border-x-transparent border-t-transparent text-gray-300 placeholder:text-gray-400"
                  type="email"
                  placeholder="Email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* END EMAIL */}

        {/* PHONE NUMBER */}
        <FormField
          control={form.control}
          name="phoneNmber"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className="pl-0 bg-transparent border-x-transparent border-t-transparent text-gray-300 placeholder:text-gray-400"
                  placeholder="Phone Number"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* END PHONE NUMBER */}

        {/* MESSAGE */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="lg:col-span-2">
              <FormControl>
                <textarea
                  rows={3}
                  className="w-full pl-0 bg-transparent border-x-transparent border-t-transparent text-gray-300 placeholder:text-gray-400 border-b border-b-input"
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
        <Button variant={"secondary"} className="mt-1">
          Send Message
        </Button>
        {/* END SEND BUTTON */}
      </form>
    </Form>
  );
}
