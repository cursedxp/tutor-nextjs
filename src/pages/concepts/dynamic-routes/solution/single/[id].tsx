import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import type { GetStaticProps, GetStaticPaths } from "next";

type Post = {
  id: string;
  title: string;
  content: string;
};

type Props = {
  post: Post;
};

// Generate the paths at build time
export const getStaticPaths: GetStaticPaths = async () => {
  // In a real app, this would fetch from an API or database
  const posts = [
    { id: "1", title: "First Post", content: "This is the first post" },
    { id: "2", title: "Second Post", content: "This is the second post" },
    { id: "3", title: "Third Post", content: "This is the third post" },
  ];

  const paths = posts.map((post) => ({
    params: { id: post.id },
  }));

  return {
    paths,
    fallback: false, // Show 404 for non-existent paths
  };
};

// Fetch data for a single post
export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  // In a real app, this would fetch from an API or database
  const posts = [
    { id: "1", title: "First Post", content: "This is the first post" },
    { id: "2", title: "Second Post", content: "This is the second post" },
    { id: "3", title: "Third Post", content: "This is the third post" },
  ];

  const post = posts.find((p) => p.id === params?.id);

  if (!post) {
    return {
      notFound: true, // This will show the 404 page
    };
  }

  return {
    props: {
      post,
    },
  };
};

const SinglePost = ({ post }: Props) => {
  const router = useRouter();

  // Show a loading state when fallback is true and page is being generated
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Dynamic Route Example</h1>

      <div className="mb-8">
        <p className="mb-4">
          This page demonstrates a dynamic route using <code>[id]</code>{" "}
          parameter. The content is statically generated at build time for each
          post ID.
        </p>

        <div className="border rounded-lg p-4 mb-6">
          <h2 className="text-xl font-semibold mb-4">Post Details</h2>
          <div className="border rounded p-4">
            <h3 className="font-semibold text-lg mb-2">{post.title}</h3>
            <p className="text-gray-600">{post.content}</p>
            <p className="text-sm text-gray-500 mt-2">Post ID: {post.id}</p>
          </div>
        </div>

        <div className="border rounded-lg p-4 mb-6">
          <h2 className="text-xl font-semibold mb-4">Other Posts</h2>
          <div className="space-y-2">
            {["1", "2", "3"].map((id) => (
              <Link
                key={id}
                href={`/concepts/dynamic-routes/solution/single/${id}`}
                className={`block p-2 rounded ${
                  id === post.id
                    ? "bg-blue-50 text-blue-600"
                    : "hover:bg-gray-50"
                }`}
              >
                View Post {id}
              </Link>
            ))}
          </div>
        </div>

        <div className="bg-green-50 border-l-4 border-green-400 p-4">
          <p className="text-green-800 font-medium">Key Points:</p>
          <ul className="list-disc ml-6 mt-2 text-black">
            <li>Uses [id] for dynamic routing</li>
            <li>Generates static pages at build time</li>
            <li>Supports fallback behavior</li>
            <li>Can access route parameters</li>
            <li>SEO-friendly with pre-rendering</li>
          </ul>
        </div>
      </div>

      <div className="flex space-x-4">
        <Link
          href="/concepts/dynamic-routes/solution"
          className="text-blue-600 hover:underline"
        >
          Back to Dynamic Routes
        </Link>
        <Link href="/" className="text-gray-600 hover:underline">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default SinglePost;
