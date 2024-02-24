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
import { login } from "@/lib/auth";
import { LoginForm, loginFormSchema } from "@/lib/formSchemas";
import { useRouter } from "next/navigation";
import { revalidatePath } from "next/cache";
import { toast } from "@/components/ui/use-toast";
import { useUser } from "@/components/session-context";

export default function Register() {
  const { setUser } = useUser();
  const router = useRouter();
  const form = useForm<LoginForm>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {},
  });

  async function onSubmit(values: LoginForm) {
    const loggedIn = await login(values);

    if (loggedIn.success && loggedIn.user) {
      toast({
        description: "Login successful",
        duration: 300,
      });
      setUser(loggedIn.user);
      router.replace("/property-listings");
    } else {
      toast({
        title: "Login Error",
        description: loggedIn.message || "Unable to login, please try again..",
        variant: "destructive",
      });
    }
  }

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
                  <form
                    className="space-y-2"
                    onSubmit={form.handleSubmit(onSubmit)}
                  >
                    {/* USERNAME */}
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              className="bg-transparent text-gray-300 placeholder:text-gray-400"
                              placeholder="Email"
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
