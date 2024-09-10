import React from "react";
import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";

const client = createClient({
  space: process.env.SPACE_ID,
  accessToken: process.env.ACCESS_TOKEN,
});

async function getPost(postId) {
  return await client.getEntry(postId);
}

const ArticlePage = async ({ params }) => {
  const post = await getPost(params.id);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{post.fields.title}</h1>
      <p className="text-gray-600 mb-8">
        {new Date(post.sys.createdAt).toLocaleDateString()}
      </p>
      {post.fields.featuredImage && (
        <div className="relative h-96 mb-8">
          <Image
            src={post.fields.featuredImage.fields.file.url}
            alt={post.fields.title}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      )}
      <div className="prose prose-lg max-w-none">
        {documentToReactComponents(post.fields.content)}
      </div>
    </div>
  );
};

export default ArticlePage;
