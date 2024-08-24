import { EmptyBlog } from "./empty-blog";
import type { Metadata } from "next";
import { NextImage } from "@/components/sanity-image";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import { POSTS_QUERYResult } from "../../../../sanity.types";
import { sanityFetch } from "@/sanity/lib/client";
export const dynamic = "force-dynamic";

export const metadata = {
  generator: "Next.js",
  applicationName: "The Joyful Mode",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Web Design Blog",
    "SEO Blog",
    "Marketing Blog",
    "Law Firm Marketing",
    "Creative Agency Blog",
    "The Joyful Mode",
  ],
  authors: [
    { name: "Waldo Lavaut" },
    { name: "The Joyful Mode Team", url: "https://www.thejoyfulmode.com" },
  ],
  creator: "Waldo Lavaut",
  publisher: "The Joyful Mode",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  title: "Web Design, SEO & Marketing Insights for Law Firms",
  description:
    "Explore expert tips, strategies, and insights on web design, SEO, and marketing for law firms. Stay ahead with The Joyful Mode's blog.",
  openGraph: {
    title: "Web Design, SEO & Marketing Insights for Law Firms",
    description:
      "Dive into expert tips, strategies, and insights on web design, SEO, and marketing tailored for law firms, brought to you by The Joyful Mode.",
    url: "https://www.thejoyfulmode.com/blog",
    siteName: "The Joyful Mode",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design, SEO & Marketing Insights for Law Firms",
    description:
      "Explore expert tips, strategies, and insights on web design, SEO, and marketing for law firms with The Joyful Mode's blog.",
    creator: "@TheJoyfulMode",
  },
  canonical: "https://www.thejoyfulmode.com/blog",
};

export default async function Blog() {
  const posts = await sanityFetch<POSTS_QUERYResult>({
    query: POSTS_QUERY,
    // revalidate: 60,
  });

  return !posts.length ? (
    <EmptyBlog />
  ) : (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            From the blog
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn how to grow your business with our expert advice.
          </p>
          <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
            {posts.map((post) => (
              <article
                key={post._id}
                className="relative isolate flex flex-col gap-8 lg:flex-row"
              >
                <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                  <NextImage
                    image={post.mainImage}
                    className="absolute inset-0 size-full rounded-2xl bg-gray-50 object-cover"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div>
                  <div className="flex items-center gap-x-4 text-xs">
                    <time
                      dateTime={post?.publishedAt as string | undefined}
                      className="text-gray-500"
                    >
                      {post.publishedAt}
                    </time>
                    {/* <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.category.title}
                  </a> */}
                  </div>
                  <div className="group relative max-w-xl">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <a href={post.slug?.current}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </a>
                    </h3>
                    <p className="mt-5 text-sm leading-6 text-gray-600">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="mt-6 flex border-t border-gray-900/5 pt-6">
                    {/* <div className="relative flex items-center gap-x-4">
                    <img
                      alt=""
                      src={post.author.imageUrl}
                      className="h-10 w-10 rounded-full bg-gray-50"
                    />
                    <div className="text-sm leading-6">
                      <p className="font-semibold text-gray-900">
                        <a href={post.author.href}>
                          <span className="absolute inset-0" />
                          {post.author.name}
                        </a>
                      </p>
                      <p className="text-gray-600">{post.author.role}</p>
                    </div>
                  </div> */}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
