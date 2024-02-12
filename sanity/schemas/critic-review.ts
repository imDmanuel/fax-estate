import { defineField, defineType } from "sanity";

export default defineType({
  name: "criticReviews",
  title: "Critic Reviews",
  type: "document",
  fields: [
    defineField({
      name: "id",
      title: "ID",
      type: "string",
    }),
    defineField({
      name: "rating",
      title: "Rating",
      type: "number",
    }),
    defineField({
      name: "date",
      title: "Review Date",
      type: "date",
    }),
    defineField({
      name: "reviewerImage",
      title: "Reviewer Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "text",
    }),
  ],
});
