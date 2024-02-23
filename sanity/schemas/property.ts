import { defineField, defineType } from "sanity";

export default defineType({
  name: "property",
  title: "Property",
  type: "document",
  fields: [
    // defineField({
    //   name: "id",
    //   title: "ID",
    //   type: "string",
    // }),
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    }),
    defineField({
      name: "address",
      title: "Address",
      type: "string",
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
    }),
    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
    }),
    defineField({
      name: "listingType",
      title: "Listing Type",
      type: "string",
      options: {
        list: ["For Rent", "For Sale"],
      },
    }),
    defineField({
      name: "rating",
      title: "Rating",
      type: "number",
    }),
    defineField({
      name: "agent",
      title: "Agent",
      type: "reference",
      to: { type: "agent" },
    }),
    defineField({
      name: "bedrooms",
      title: "Bedrooms",
      type: "number",
    }),
    defineField({
      name: "bathrooms",
      title: "Bathrooms",
      type: "number",
    }),
    defineField({
      name: "size",
      title: "Size",
      type: "number",
    }),
    defineField({
      name: "uploadDate",
      title: "Upload Date",
      type: "date",
    }),
    defineField({
      name: "livingRooms",
      title: "Living rooms",
      type: "number",
    }),
    defineField({
      name: "garages",
      title: "Garages",
      type: "number",
    }),
    defineField({
      name: "originatingYear",
      title: "Originating Year",
      type: "number",
    }),
    defineField({
      name: "facilities",
      title: "Facilities",
      type: "object",
      fields: [
        {
          name: "airConditioning",
          title: "Air Conditioning",
          type: "boolean",
        },
        {
          name: "balcony",
          title: "Balcony",
          type: "boolean",
        },
        {
          name: "internet",
          title: "Internet",
          type: "boolean",
        },
        {
          name: "lawn",
          title: "Lawn",
          type: "boolean",
        },
        {
          name: "dishwasher",
          title: "Dishwasher",
          type: "boolean",
        },
        {
          name: "cableTV",
          title: "Cable TV",
          type: "boolean",
        },
        {
          name: "gym",
          title: "Gym",
          type: "boolean",
        },
        {
          name: "parking",
          title: "Parking",
          type: "boolean",
        },
        {
          name: "pool",
          title: "Pool",
          type: "boolean",
        },
        {
          name: "fridge",
          title: "Fridge",
          type: "boolean",
        },
        {
          name: "swimmingPool",
          title: "Swimming Pool",
          type: "boolean",
        },
      ],
    }),
    defineField({
      name: "floorPlans",
      title: "Floor Plans",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "featuredImage",
      title: "Featured Image",
      description: "Image that shows in the proprty card",
      type: "image",
      options: {
        hotspot: true,
        modal: { type: "dialog" },
      },
    }),
    defineField({
      name: "propertyImages",
      title: "Property images",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
            modal: {
              type: "dialog",
            },
          },
        },
      ],
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "youtubeVideo",
      title: "Youtube Video",
      type: "object",
      fields: [
        { name: "video", type: "youtubeVideo" },
        { name: "autoplay", type: "boolean", initialValue: false },
        { name: "controls", type: "boolean", initialValue: true },
      ],
    }),
    defineField({
      title: "Location on Map",
      name: "mapLocation",
      type: "geopoint",
      options: {
        googleMapsInput: true,
      },
    }),
    {
      name: "criticReviews",
      title: "Critic Reviews",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "criticReview" },
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
});
