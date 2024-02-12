"use client";

import React from "react";
import { Button } from "./ui/button";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectValue,
  SelectTrigger,
} from "./ui/select";

const propertyCategory = [
  {
    category: "Single-Family Homes",
    description:
      "Detached houses designed for a single family, with no shared walls or living spaces. They can vary in size and style.",
  },
  {
    category: "Duplex",
    description:
      "A building divided into two separate living units, each with its own entrance. Duplexes can be side-by-side or stacked.",
  },
  {
    category: "Townhouse",
    description:
      "Attached homes in a row or block, typically with shared walls. Townhouses often have multiple floors and a small yard.",
  },
  {
    category: "Condominium (Condo)",
    description:
      "Individual units within a larger building, where residents own their unit and share common areas and amenities.",
  },
  {
    category: "Apartment",
    description:
      "Multi-unit buildings with individual rental units. Apartments can vary in size and style, from small studios to larger units.",
  },
  {
    category: "Bungalow",
    description:
      "A single-story house, often with a front porch and a low-pitched roof. Bungalows are known for their simplicity and functionality.",
  },
  {
    category: "Cottage",
    description:
      "Small, cozy houses often characterized by a rustic or quaint design. Cottages may be used for vacation homes.",
  },
  {
    category: "Colonial",
    description:
      "Houses inspired by colonial architecture, often characterized by symmetry, square or rectangular shapes, and a centrally located front door.",
  },
  {
    category: "Victorian",
    description:
      "Houses inspired by the architecture of the Victorian era, featuring elaborate and decorative details, often with turrets, bay windows, and ornate trim.",
  },
  {
    category: "Craftsman",
    description:
      "Houses influenced by the Arts and Crafts movement, known for their craftsmanship, simplicity, and use of natural materials.",
  },
  {
    category: "Ranch",
    description:
      "Single-story houses with a long, low profile. Ranch-style homes are known for their open floor plans and large windows.",
  },
  {
    category: "Split-Level",
    description:
      "Houses with multiple levels that are staggered, creating distinct living areas. Split-level homes often have short staircases.",
  },
  {
    category: "Cape Cod",
    description:
      "Houses inspired by traditional Cape Cod architecture, featuring steep roofs, dormer windows, and symmetrical facades.",
  },
  {
    category: "Modern/Contemporary",
    description:
      "Houses characterized by clean lines, large windows, open spaces, and an emphasis on innovative design and materials.",
  },
  {
    category: "Mansion",
    description:
      "Large, luxurious homes often associated with wealth and grandeur. Mansions may have extensive grounds and amenities.",
  },
  {
    category: "Tiny House",
    description:
      "Extremely small houses designed for minimalist living. Tiny houses often prioritize efficiency and simplicity.",
  },
  {
    category: "Geodesic Dome",
    description:
      "Houses with a dome-shaped structure made of triangles, typically associated with innovative and modern design.",
  },
  {
    category: "Floating Home/Houseboat",
    description:
      "Houses that float on water, often found in marinas or on lakes. Houseboats may have amenities similar to traditional homes.",
  },
  {
    category: "Earthship",
    description:
      "Sustainable and off-grid houses designed with a focus on environmental principles, often incorporating recycled materials.",
  },
  {
    category: "Prefab/Modular Home",
    description:
      "Houses constructed from pre-manufactured sections or modules. Prefab homes are often assembled on-site.",
  },
];

const propertyStatus = [
  {
    status: "Active",
    description:
      "The property is actively listed for sale, and potential buyers can make offers.",
  },
  {
    status: "Pending",
    description:
      "A sale is pending, indicating that an offer has been accepted, and the transaction is in progress but has not yet closed.",
  },
  {
    status: "Sold",
    description:
      "The property has been successfully sold, and the transaction is complete.",
  },
  {
    status: "Withdrawn",
    description:
      "The property was listed for sale, but the listing has been withdrawn, and it is no longer on the market.",
  },
  {
    status: "Expired",
    description:
      "The listing agreement for the property has expired without a successful sale.",
  },
  {
    status: "Cancelled",
    description:
      "The listing agreement has been canceled by either the seller or the real estate agent.",
  },
  {
    status: "Coming Soon",
    description:
      "The property is not yet officially on the market, but there is an intention to list it soon.",
  },
  {
    status: "Active Under Contract",
    description:
      "Similar to pending, indicating that an offer has been accepted, but the sale has not yet closed.",
  },
  {
    status: "Back on Market",
    description:
      "The property was previously under contract but is now available again for sale.",
  },
  {
    status: "For Rent",
    description: "The property is available for rent rather than for sale.",
  },
  {
    status: "Auction",
    description: "The property is being sold through an auction process.",
  },
  {
    status: "Price Reduced",
    description: "The listing price of the property has been reduced.",
  },
  {
    status: "Foreclosure",
    description:
      "The property is in the process of foreclosure, and the lender is seeking to sell it to recover the outstanding mortgage balance.",
  },
  {
    status: "Short Sale",
    description:
      "The property is being sold for less than the outstanding mortgage balance, with the lender's approval.",
  },
  {
    status: "Lease Option",
    description:
      "The property is available for lease with an option for the tenant to purchase it later.",
  },
  {
    status: "Under Renovation",
    description:
      "The property is undergoing renovations or improvements and may not be available for immediate occupancy.",
  },
  {
    status: "Vacant",
    description: "The property is currently unoccupied.",
  },
  {
    status: "Pending Approval",
    description:
      "The sale is pending, subject to certain conditions or approvals.",
  },
];

const formSchema = z.object({
  propertyCategory: z.string(),
  minSize: z.number().int().positive().gt(0),
  minLotSize: z.number().int().positive().gt(0),
  status: z.string(),
});

export function HeroSearchForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  function onSubmit(values: z.infer<typeof formSchema>) {}

  return (
    <>
      {/* SEARCH FORM */}
      <div className="mt-16 shadow-2xl shadow-gray-400/45">
        <div className="bg-white inline-block px-6 py-2">Rentals</div>
        <Form {...form}>
          <form className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr_1fr_0.5fr] gap-3 items-center bg-white px-6 py-6">
            {/* PROPERTY CATEGORY */}
            <FormField
              control={form.control}
              name="propertyCategory"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Property Category</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Property Category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {propertyCategory.map((category) => (
                        <SelectItem
                          value={category.category}
                          key={category.category}
                        >
                          {category.category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
            {/* END PROPERTY CATEGORY */}

            {/* MIN SIZE */}
            <FormField
              control={form.control}
              name="minSize"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Min Size</FormLabel>
                  <FormControl>
                    <Input placeholder="Property Size" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* END MIN SIZE */}

            {/* MIN LOT SIZE */}
            <FormField
              control={form.control}
              name="minLotSize"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Min Lot Size</FormLabel>
                  <FormControl>
                    <Input placeholder="Property Lot Size" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* END MIN LOT SIZE */}

            {/* STATUS */}
            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Status</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Property Status" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {propertyStatus.map((status) => (
                        <SelectItem value={status.status} key={status.status}>
                          {status.status}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* END STATUS */}

            {/* SEARCH BUTTON */}
            <Button className="mt-8">Search</Button>
            {/* END SEARCH BUTTON */}
          </form>
        </Form>
      </div>
      {/* END SEARCH FORM */}
    </>
  );
}
