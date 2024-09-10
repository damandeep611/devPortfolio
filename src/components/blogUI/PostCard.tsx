import Image from "next/image";
import Link from "next/link";

export const PostCard = ({ post }) => {
  const { title, slug, excerpt, coverImage } = post.fields;
  return (
    <>
      <Link href={`/blog/${post.sys.id}`} className="block">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {post.fields.featuredImage && (
            <div className="relative h-48">
              <Image
                src={post.fields.featuredImage.fields.file.url}
                alt={post.fields.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
          )}
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">{post.fields.title}</h2>
            <p className="text-gray-600 text-sm mb-4">
              {new Date(post.sys.createdAt).toLocaleDateString()}
            </p>
            <p className="text-gray-700 line-clamp-3">{post.fields.excerpt}</p>
          </div>
        </div>
      </Link>
    </>
  );
};
