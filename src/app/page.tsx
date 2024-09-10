import Image from "next/image";
import Link from "next/link";
import { BlogQueryResult } from "./types";
import { createClient } from "contentful";

const client = createClient({
  space: process.env.SPACE_ID,
  accessToken: process.env.ACCESS_TOKEN,
});

const getBlogEntries = async (): Promise<BlogQueryResult> => {
  const entries = await client.getEntries({ content_type: "posts" });
  return entries;
};

export default async function Home() {
  const blogEntries = await getBlogEntries();
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Latest Blog Posts</h1>
      <div className="space-y-8">
        {blogEntries.items.map((singlePost) => {
          const { slug, title, date } = singlePost.fields;
          return (
            <div key={slug} className="border-b pb-4">
              <Link className="group" href={`/articles/${slug}`}>
                <h2 className="font-extrabold text-xl group-hover:text-blue-500 transition-colors">
                  {title}
                </h2>
                <span className="text-gray-600">
                  Posted on{" "}
                  {new Date(date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}