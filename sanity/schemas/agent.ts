import { defineField, defineType } from "sanity";

export default defineType({
  name: "agent",
  title: "Agent",
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
      name: "designation",
      title: "Designation",
      type: "string",
      options: {
        list: [
          {
            value: "real-estate-broker",
            title: "Real Estate Broker",
          },
          { value: "sales-executive", title: "Sales Executive" },
          {
            value: "commercial-broker",
            title: "Commercial Broker",
          },
          { value: "sales-person", title: "Sales Person" },
          { value: "buying-agent", title: "Buying Agent" },
        ],
      },
    }),
    defineField({
      name: "image",
      title: "Agent Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "socials",
      title: "Social media handles",
      type: "object",
      fields: [
        { name: "twitter", title: "Twitter", type: "string" },
        { name: "facebook", title: "Facebook", type: "string" },
        { name: "instagram", title: "Instagram", type: "string" },
      ],
    }),
    // TODO: LISTING COUNT IS A DERIVED FIELD
    defineField({
      name: "listingCount",
      title: "Listing Count",
      type: "number",
      hidden: true,
    }),
    defineField({
      name: "yearJoined",
      title: "Year Joined",
      type: "number",
    }),
    defineField({
      name: "from",
      title: "From",
      type: "string",
    }),
    defineField({
      name: "bio",
      title: "Agent Bio",
      // TODO: CHANGETO BLOCK CONTENT
      type: "text",
    }),
    defineField({
      name: "language",
      title: "Language",
      type: "string",
    }),
    defineField({
      name: "phone",
      title: "Phone",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
  ],

  preview: {
    select: {
      title: "name",
      subtitle: "id",
      media: "image",
    },
    // prepare(selection) {
    //   const { name } = selection;
    //   return { ...selection, subtitle: author && `by ${author}` };
    // },
  },
});
