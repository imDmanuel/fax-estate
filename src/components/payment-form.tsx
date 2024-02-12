"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { Button } from "./ui/button";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

const FormSchema = z.object({
  type: z.enum(["direct-transfer", "check-payments", "crypto"]),
});

export default function PaymentForm() {
  const form = useForm<z.infer<typeof FormSchema>>();

  return (
    <div className="bg-white px-5 py-8 mt-6">
      {/* PAYMENT DETAILS */}
      <Form {...form}>
        <form>
          <div className="text-xl font-bold mb-3">Payment</div>

          <div>
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Select payment method...</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="direct-transfer" />
                        </FormControl>
                        <FormLabel>Direct bank transfer</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="check-payments" />
                        </FormControl>
                        <FormLabel>Check payment</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="crypto" />
                        </FormControl>
                        <FormLabel>Crypto payment</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                </FormItem>
              )}
            ></FormField>
          </div>
        </form>
      </Form>
      {/* END PAYMENT DETAILS */}

      {/* SUBMIT BUTTON */}
      <Button className="mt-1 w-full mt-10">Purchase</Button>
      {/* END SUBMIT BUTTON */}
    </div>
  );
}
