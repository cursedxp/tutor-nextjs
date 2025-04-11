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
  post: Post | null;
};

// TODO: Implement getStaticPaths
export const getStaticPaths: GetStaticPaths = async () => {
  // Your task is to:
  // 1. Define the possible paths for this dynamic route
  // 2. Return the paths and fallback behavior
  return {
    paths: [],
    fallback: false,
  };
};

// TODO: Implement getStaticProps
export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  // Your task is to:
  // 1. Get the id parameter from params
  // 2. Fetch or create the post data
  // 3. Return the data as props
  return {
    props: {
      post: null,
    },
  };
};

const SinglePostStarter = ({ post }: Props) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!post) {
    return (
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Dynamic Route Exercise</h1>
        <p className="text-red-600">
          No post found. Implement getStaticProps to fetch post data!
        </p>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Dynamic Route Exercise</h1>

      <div className="mb-8">
        <p className="mb-4">
          Your task is to implement a dynamic route using <code>[id]</code>{" "}
          parameter. Follow these steps:
        </p>

        <ol className="list-decimal ml-8 mb-6 space-y-2">
          <li>Define possible paths in getStaticPaths</li>
          <li>Implement data fetching in getStaticProps</li>
          <li>Handle the route parameter</li>
          <li>Display the post data</li>
        </ol>

        <div className="border rounded-lg p-4 mb-6">
          <h2 className="text-xl font-semibold mb-4">Post Details</h2>
          <div className="border rounded p-4">
            <h3 className="font-semibold text-lg mb-2">{post.title}</h3>
            <p className="text-gray-600">{post.content}</p>
            <p className="text-sm text-gray-500 mt-2">Post ID: {post.id}</p>
          </div>
        </div>

        <div className="border rounded-lg p-4 mb-6">
          <h2 className="text-xl font-semibold mb-4">Navigation</h2>
          <div className="space-y-2">
            {["1", "2", "3"].map((id) => (
              <Link
                key={id}
                href={`/concepts/dynamic-routes/starter/single/${id}`}
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

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <p className="text-yellow-800 font-medium">Exercise Instructions:</p>
          <ul className="list-disc ml-6 mt-2 text-black">
            <li>Implement getStaticPaths to define valid paths</li>
            <li>Implement getStaticProps to fetch post data</li>
            <li>Handle the id parameter from the URL</li>
            <li>Return proper data and fallback behavior</li>
            <li>Test with different post IDs</li>
          </ul>
        </div>
      </div>

      <div className="flex space-x-4">
        <Link
          href="/concepts/dynamic-routes/solution/single/1"
          className="text-blue-600 hover:underline"
        >
          View Solution
        </Link>
        <Link
          href="/concepts/dynamic-routes/starter"
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

export default SinglePostStarter;
