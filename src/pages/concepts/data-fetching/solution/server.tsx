import React from "react";
import Link from "next/link";
import type { GetServerSideProps } from "next";

type Post = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
};

type ServerProps = {
  posts: Post[];
  timestamp: string;
};

// This function runs on every request
export const getServerSideProps: GetServerSideProps<ServerProps> = async () => {
  // Simulate fetching data from an API or database
  const posts: Post[] = [
    {
      id: "1",
      title: "Server-Side Rendering with Next.js",
      content: "This post was generated on the server for each request.",
      createdAt: new Date().toISOString(),
    },
    {
      id: "2",
      title: "Benefits of Server-Side Rendering",
      content:
        "Server-side rendering provides up-to-date data and SEO benefits.",
      createdAt: new Date().toISOString(),
    },
    {
      id: "3",
      title: "When to Use Server-Side Rendering",
      content: "Use SSR when you need real-time data or user-specific content.",
      createdAt: new Date().toISOString(),
    },
  ];

  return {
    props: {
      posts,
      timestamp: new Date().toISOString(),
    },
  };
};

const ServerDataFetching = ({ posts, timestamp }: ServerProps) => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Server-Side Rendering Example</h1>

      <div className="mb-8">
        <p className="mb-4">
          This page demonstrates server-side rendering using{" "}
          <code>getServerSideProps</code>. The data is fetched on each request,
          ensuring it's always up to date.
        </p>

        <div className="border rounded-lg p-4 mb-6">
          <h2 className="text-xl font-semibold mb-2">Request Time Data</h2>
          <p className="text-gray-600 mb-4">
            This page was generated at: {new Date(timestamp).toLocaleString()}
          </p>

          <div className="space-y-4">
            {posts.map((post) => (
              <div key={post.id} className="border rounded p-4">
                <h3 className="font-semibold text-lg mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-2">{post.content}</p>
                <p className="text-sm text-gray-500">
                  Created: {new Date(post.createdAt).toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-green-50 border-l-4 border-green-400 p-4">
          <p className="text-green-800 font-medium">Key Points:</p>
          <ul className="list-disc ml-6 mt-2 text-black">
            <li>Data is fetched on every request</li>
            <li>Pages are rendered on the server</li>
            <li>Great for real-time or user-specific data</li>
            <li>Provides SEO benefits</li>
            <li>Can access request context (cookies, headers, etc.)</li>
          </ul>
        </div>
      </div>

      <div className="flex space-x-4">
        <Link
          href="/concepts/data-fetching/solution"
          className="text-blue-600 hover:underline"
        >
          Back to Data Fetching
        </Link>
        <Link href="/" className="text-gray-600 hover:underline">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ServerDataFetching;
