/* eslint-disable react/no-unescaped-entities */
"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import registerImage from "@/assets/images/apartment-building.jpg";
import Link from "next/link";

const formSchema = z.object({
  username: z.string({ required_error: "Username is required!" }),
  password: z
    .string({ required_error: "Password is required!" })
    .min(6, "Please enter at least six (6) characters!"),
});

export default function Register() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  return (
    <main>
      <section className="mt-20">
        <div className="container">
          <div className="flex max-w-3xl mx-auto">
            {/* LEFT */}
            <div className="flex-1">
              <Form {...form}>
                <div className="bg-white px-8 py-9">
                  <div className="font-bold text-2xl mb-5">Login</div>
                  <form className="space-y-2">
                    {/* USERNAME */}
                    <FormField
                      control={form.control}
                      name="username"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Account</FormLabel>
                          <FormControl>
                            <Input
                              type="text"
                              className="bg-transparent text-gray-300 placeholder:text-gray-400"
                              placeholder="User Name"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    {/* END USERNAME */}

                    {/* PASSWORD */}
                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <Input
                              className="bg-transparent text-gray-300 placeholder:text-gray-400"
                              type="password"
                              placeholder="Your Passowrd"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    {/* END PASSWORD */}

                    <div className="text-right pb-2">
                      <Link href={""} className="text-gray-500 text-sm">
                        Forgot Password?
                      </Link>
                    </div>

                    {/* SIGN UP BUTTON */}
                    <Button className="mt-1 w-full">Login</Button>
                    {/* END SIGN UP BUTTON */}
                  </form>
                  <p className="text-center text-sm">
                    Don't have an account?{" "}
                    <Button variant="link" className="text-blue-400 px-1">
                      <Link href={"/register"}>Register</Link>
                    </Button>
                  </p>
                </div>
              </Form>
            </div>
            {/* END LEFT */}

            {/* RIGHT */}
            <div className="flex-1 relative hidden md:block">
              <Image
                src={registerImage}
                alt=""
                className="absolute w-full h-full object-cover"
              />
            </div>
            {/* END RIGHT */}
          </div>
        </div>
      </section>
    </main>
  );
}
