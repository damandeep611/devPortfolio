import React from "react";
import { createClient } from "contentful";
import { PostCard } from "./PostCard";

const client = createClient({
  space: process.env.SPACE_ID,
  accessToken: process.env.ACCESS_TOKEN,
});

async function getBlogPosts() {
  const response = await client.getEntries({
    content_type: "posts",
  });
  return response.items;
}

const BlogPage = async () => {
  const posts = await getBlogPosts();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <PostCard key={post.sys.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
