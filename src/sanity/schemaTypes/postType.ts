import { FileText, Image } from "lucide-react";
import { defineArrayMember, defineField, defineType } from "sanity";

export const postType = defineType({
  name: "post",
  title: "Post",
  type: "document",
  icon: FileText,
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (rule) => rule.required().error("Slug is required"),
    }),
    defineField({
      name: "author",
      type: "reference",
      to: { type: "author" },
    }),
    defineField({
      name: "mainImage",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
        },
      ],
    }),
    defineField({
      name: "categories",
      type: "array",
      of: [defineArrayMember({ type: "reference", to: { type: "category" } })],
    }),
    defineField({
      name: "publishedAt",
      type: "datetime",
      validation: (rule) =>
        rule.required().error("Publication date is required"),
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      description: "A short summary of the blog post for previews and SEO.",
      validation: (rule) =>
        rule
          .max(160)
          .warning(
            "Try to keep the excerpt under 160 characters for better SEO."
          ),
    }),
    defineField({
      name: "body",
      type: "blockContent",
    }),
    // SEO Fields
    defineField({
      name: "metaTitle",
      title: "Meta Title",
      type: "string",
      description:
        "Used for the page title in search engines. Keep it under 60 characters.",
      validation: (rule) =>
        rule
          .max(60)
          .warning(
            "Try to keep the meta title under 60 characters for better SEO."
          ),
    }),
    defineField({
      name: "metaDescription",
      title: "Meta Description",
      type: "text",
      description:
        "A brief description of the page content. Keep it under 160 characters for better SEO.",
      validation: (rule) =>
        rule
          .max(160)
          .warning(
            "Try to keep the meta description under 160 characters for better SEO."
          ),
    }),
    defineField({
      name: "openGraphImage",
      title: "Open Graph Image",
      type: "image",
      description:
        "Image that will be displayed when the post is shared on social media.",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "canonicalUrl",
      title: "Canonical URL",
      type: "url",
      description:
        "The preferred URL for this content to avoid duplicate content issues.",
    }),
  ],
  preview: {
    select: {
      title: "title",
      author: "author.name",
      publishedAt: "publishedAt",
      mainImage: "mainImage",
    },
    prepare({ title, author, publishedAt, mainImage }) {
      const dateFormatted = publishedAt
        ? new Date(publishedAt).toLocaleDateString(undefined, {
            month: "short",
            day: "numeric",
            year: "numeric",
          })
        : "No date";
      return {
        title: title || "Untitled Post",
        subtitle: `${author ? `by ${author} - ` : ""}${dateFormatted}`,
        media: mainImage || Image,
      };
    },
  },
});
