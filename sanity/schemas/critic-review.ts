import { defineField, defineType } from "sanity";

export default defineType({
  name: "criticReview",
  title: "Critic Reviews",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required().error("Name is required"),
    }),
    defineField({
      name: "rating",
      title: "Rating",
      type: "number",
      validation: (Rule) => [
        Rule.required()
          .min(1)
          .error("Rating is required and must be at leat 1"),
        Rule.max(5).error("Rating must not be more than 5"),
      ],
    }),
    defineField({
      name: "date",
      title: "Review Date",
      type: "date",
      validation(rule) {
        return [rule.required().error("Review date is required")];
      },
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
      validation(rule) {
        return rule.required().error("Content field is required");
      },
    }),
  ],
});
