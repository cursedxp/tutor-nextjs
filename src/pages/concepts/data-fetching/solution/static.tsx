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

// This function runs at build time
export const getStaticProps: GetStaticProps<StaticProps> = async () => {
  // Simulate fetching data from an API or database
  const posts: Post[] = [
    {
      id: "1",
      title: "Static Generation with Next.js",
      content: "This post was generated at build time.",
      createdAt: new Date().toISOString(),
    },
    {
      id: "2",
      title: "Benefits of Static Generation",
      content:
        "Static generation provides better performance and SEO benefits.",
      createdAt: new Date().toISOString(),
    },
    {
      id: "3",
      title: "When to Use Static Generation",
      content: "Use static generation for content that doesn't change often.",
      createdAt: new Date().toISOString(),
    },
  ];

  return {
    props: {
      posts,
      buildTime: new Date().toISOString(),
    },
    // Optional: Revalidate every hour
    revalidate: 3600,
  };
};

const StaticDataFetching = ({ posts, buildTime }: StaticProps) => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Static Generation Example</h1>

      <div className="mb-8">
        <p className="mb-4">
          This page demonstrates static generation using{" "}
          <code>getStaticProps</code>. The data is fetched at build time and can
          be optionally revalidated using ISR.
        </p>

        <div className="border rounded-lg p-4 mb-6">
          <h2 className="text-xl font-semibold mb-2">Build Time Data</h2>
          <p className="text-gray-600 mb-4">
            This page was built at: {new Date(buildTime).toLocaleString()}
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
            <li>Data is fetched at build time</li>
            <li>Pages are pre-rendered into static HTML</li>
            <li>Great for content that doesn't change often</li>
            <li>Provides excellent performance and SEO</li>
            <li>Can be revalidated using ISR</li>
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

export default StaticDataFetching;
