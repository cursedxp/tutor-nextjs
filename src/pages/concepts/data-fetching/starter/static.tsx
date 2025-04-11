import React from "react";
import Link from "next/link";
import type { GetStaticProps } from "next";

type Post = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
};

type StaticProps = {
  posts: Post[];
  buildTime: string;
};

// TODO: Implement getStaticProps
export const getStaticProps: GetStaticProps<StaticProps> = async () => {
  // Your task is to:
  // 1. Fetch or create some data
  // 2. Return it as props
  return {
    props: {
      posts: [],
      buildTime: new Date().toISOString(),
    },
  };
};

const StaticDataFetchingStarter = ({ posts, buildTime }: StaticProps) => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Static Generation Exercise</h1>

      <div className="mb-8">
        <p className="mb-4">
          Your task is to implement static generation using{" "}
          <code>getStaticProps</code>. Follow these steps:
        </p>

        <ol className="list-decimal ml-8 mb-6 space-y-2">
          <li>Create or fetch some data</li>
          <li>
            Implement the <code>getStaticProps</code> function
          </li>
          <li>Return the data as props</li>
          <li>Display the data in the component</li>
        </ol>

        <div className="border rounded-lg p-4 mb-6">
          <h2 className="text-xl font-semibold mb-2">Build Time Data</h2>
          <p className="text-gray-600 mb-4">
            This page was built at: {new Date(buildTime).toLocaleString()}
          </p>

          <div className="space-y-4">
            {posts.length === 0 ? (
              <p className="text-gray-500 italic">
                No posts found. Implement getStaticProps to fetch some data!
              </p>
            ) : (
              posts.map((post) => (
                <div key={post.id} className="border rounded p-4">
                  <h3 className="font-semibold text-lg mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-2">{post.content}</p>
                  <p className="text-sm text-gray-500">
                    Created: {new Date(post.createdAt).toLocaleString()}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <p className="text-yellow-800 font-medium">Exercise Instructions:</p>
          <ul className="list-disc ml-6 mt-2 text-black">
            <li>Create data that represents blog posts</li>
            <li>Implement getStaticProps</li>
            <li>Return the data as props</li>
            <li>Display the data in the component</li>
            <li>Test that the page works correctly</li>
          </ul>
        </div>
      </div>

      <div className="flex space-x-4">
        <Link
          href="/concepts/data-fetching/solution/static"
          className="text-blue-600 hover:underline"
        >
          View Solution
        </Link>
        <Link
          href="/concepts/data-fetching/starter"
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

export default StaticDataFetchingStarter;
