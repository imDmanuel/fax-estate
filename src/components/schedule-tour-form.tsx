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
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "./ui/calendar";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useParams } from "next/navigation";

const formSchema = z.object({
  date: z
    .date({ required_error: "Scheduled date is required!" })
    .min(new Date(), "Must be on a future date"),
  time: z.string().optional(),
  name: z.string({ required_error: "Name is required!" }),
  phoneNmber: z.string().optional(),
  email: z.string().email("Please enter a valid email!"),
  message: z
    .string({ required_error: "Message to send is required!" })
    .min(20, "Please enter at least twenty (20) characters!")
    .max(300, "Message must not exceed 300 characters!"),
});

export function ScheduleTourForm() {
  const { slug } = useParams();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  function onSubmit(values: z.infer<typeof formSchema>) {}

  return (
    <Form {...form}>
      <form className="space-y-4">
        {/* DATE */}
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full pl-3 text-left font-normal bg-transparent",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* END DATE */}

        {/* TIME */}
        <FormField
          control={form.control}
          name="time"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className="bg-transparent text-gray-300 placeholder:text-gray-400"
                  placeholder="Time"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* END TIME */}

        {/* NAME */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className="bg-transparent text-gray-300 placeholder:text-gray-400"
                  type="name"
                  placeholder="Name"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* END NAME */}

        {/* PHONE NUMBER */}
        <FormField
          control={form.control}
          name="phoneNmber"
          render={({ field }) => (
            <FormItem>
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
              <FormControl>
                <Input
                  className="bg-transparent text-gray-300 placeholder:text-gray-400"
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

        {/* MESSAGE */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="lg:col-span-2">
              <FormControl>
                <textarea
                  rows={3}
                  className="w-full px-3 py-2 bg-transparent text-gray-300 placeholder:text-gray-400 border border-input resize-none"
                  {...field}
                  placeholder="Message"
                ></textarea>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* END MESSAGE */}

        {/* SEARCH BUTTON */}
        <Button className="mt-1 w-full" asChild>
          <Link href={`/checkout?slug=${slug}`}>Schedule a tour</Link>
        </Button>
        {/* END SEARCH BUTTON */}
      </form>
    </Form>
  );
}
