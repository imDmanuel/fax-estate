"use client";

import React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Button } from "./ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { format } from "date-fns";
import { CalendarIcon, X } from "lucide-react";
import { Calendar } from "./ui/calendar";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  firstName: z
    .string({ required_error: "First name is required" })
    .min(3, "First name must have a minimum of 3 letters"),
  lastName: z
    .string({ required_error: "Last name is required!" })
    .min(3, "Enter a minimum of 3 characters for the last name"),
  companyName: z.string().optional(),
  email: z.string().email("Please enter a valid email!"),
  streetAddress: z
    .string({ required_error: "Street address is required!" })
    .min(20, "Please enter at least twenty (20) characters!"),
  city: z.string({ required_error: "City is required" }),
  state: z.string({ required_error: "State is required" }),
  country: z.string({ required_error: "Country is required" }),
  zipCode: z.string({ required_error: "Zip code is required" }),
  phone: z.string({ required_error: "Phone number is required" }),
});

export default function BillingDetailsForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  return (
    <Form {...form}>
      <form className="space-y-2">
        {/* FIRST NAME */}
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First name*</FormLabel>
              <FormControl>
                <Input
                  className="bg-transparent text-gray-300 placeholder:text-gray-400"
                  placeholder=""
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
              <FormLabel>Last name*</FormLabel>
              <FormControl>
                <Input
                  className="bg-transparent text-gray-300 placeholder:text-gray-400"
                  placeholder=""
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* END LAST NAME */}

        {/* COMPANY NAME */}
        <FormField
          control={form.control}
          name="companyName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company name (optional)</FormLabel>
              <FormControl>
                <Input
                  className="bg-transparent text-gray-300 placeholder:text-gray-400"
                  placeholder=""
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* END COMPANY NAME */}

        {/* COUNTRY/REGION */}
        <FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Country/Region*</FormLabel>
              <FormControl>
                <Input
                  className="bg-transparent text-gray-300 placeholder:text-gray-400"
                  placeholder=""
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* END COUNTRY/REGION */}

        {/* STREET ADDRESS */}
        <FormField
          control={form.control}
          name="streetAddress"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Street Address*</FormLabel>
              <FormControl>
                <Input
                  className="bg-transparent text-gray-300 placeholder:text-gray-400"
                  placeholder=""
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* END STREET ADDRESS */}

        {/* TOWN/CITY */}
        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Town/City*</FormLabel>
              <FormControl>
                <Input
                  className="bg-transparent text-gray-300 placeholder:text-gray-400"
                  placeholder=""
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* END TOWN/CITY */}

        {/* STATE */}
        <FormField
          control={form.control}
          name="state"
          render={({ field }) => (
            <FormItem>
              <FormLabel>State*</FormLabel>
              <FormControl>
                <Input
                  className="bg-transparent text-gray-300 placeholder:text-gray-400"
                  placeholder=""
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* END STATE */}

        {/* ZIP CODE */}
        <FormField
          control={form.control}
          name="zipCode"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ZIP Code*</FormLabel>
              <FormControl>
                <Input
                  className="bg-transparent text-gray-300 placeholder:text-gray-400"
                  placeholder=""
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* END ZIP CODE */}

        {/* PHONE NUMBER */}
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone*</FormLabel>
              <FormControl>
                <Input
                  className="bg-transparent text-gray-300 placeholder:text-gray-400"
                  placeholder="Phone"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* END PHONE NUMBER */}

        {/* EMAIL */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email*</FormLabel>
              <FormControl>
                <Input
                  className="bg-transparent text-gray-300 placeholder:text-gray-400"
                  type="email"
                  placeholder=""
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* END EMAIL */}
      </form>
    </Form>
  );
}
