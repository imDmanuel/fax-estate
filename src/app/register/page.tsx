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
import { RegisterForm, registerFormSchema } from "@/lib/formSchemas";
import { register } from "@/lib/auth";
import { useToast } from "@/components/ui/use-toast";
import { redirect } from "next/navigation";

export default function Register() {
  const { toast } = useToast();
  const form = useForm<RegisterForm>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {},
  });

  async function onSubmit(values: RegisterForm) {
    const result = await register(values);

    if (result.success) {
      toast({
        variant: "default",
        title: "Success!",
        description: "User account successfully created! please login..",
      });

      redirect("/login");
    } else {
      toast({
        variant: "destructive",
        title: "Error!",
        description: result.message,
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
                  <div className="font-bold text-2xl mb-5">Registration</div>
                  <form
                    className="space-y-2"
                    onSubmit={form.handleSubmit(onSubmit)}
                  >
                    {/* USERNAME */}
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
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

                    {/* EMAIL */}
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              className="bg-transparent text-gray-300 placeholder:text-gray-400"
                              placeholder="Email"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    {/* END EMAIL */}

                    {/* Password */}
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
                    {/* END Password */}

                    {/* CONFIRM PASSWORD */}
                    <FormField
                      control={form.control}
                      name="confirm"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Confirm password</FormLabel>
                          <FormControl>
                            <Input
                              type="password"
                              className="bg-transparent text-gray-300 placeholder:text-gray-400"
                              placeholder="Confirm password"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    {/* END CONFIRM PASSWORD */}

                    {/* SIGN UP BUTTON */}
                    <Button className="mt-1 w-full">Sign Up</Button>
                    {/* END SIGN UP BUTTON */}
                  </form>
                  <p className="text-center text-sm">
                    Already have an account?{" "}
                    <Button variant="link">
                      <Link href={"/login"} className="text-blue-400 px-1">
                        Login
                      </Link>
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
