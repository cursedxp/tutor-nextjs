import React, { useState, useEffect } from "react";
import Link from "next/link";

type Post = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
};

const ClientDataFetching = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        setError(null);

        // Simulate API call with delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Simulate fetching data
        const posts: Post[] = [
          {
            id: "1",
            title: "Client-Side Fetching in Next.js",
            content: "This post was fetched on the client side.",
            createdAt: new Date().toISOString(),
          },
          {
            id: "2",
            title: "Benefits of Client-Side Fetching",
            content:
              "Great for data that changes frequently or is user-specific.",
            createdAt: new Date().toISOString(),
          },
          {
            id: "3",
            title: "When to Use Client-Side Fetching",
            content:
              "Use when data needs to be updated frequently without a page reload.",
            createdAt: new Date().toISOString(),
          },
        ];

        setPosts(posts);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch posts");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [refreshKey]);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">
        Client-Side Data Fetching Example
      </h1>

      <div className="mb-8">
        <p className="mb-4">
          This page demonstrates client-side data fetching using the{" "}
          <code>useEffect</code> hook. The data is fetched after the component
          mounts on the client side.
        </p>

        <div className="border rounded-lg p-4 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Client-Side Data</h2>
            <button
              onClick={() => setRefreshKey((k) => k + 1)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Refresh Data
            </button>
          </div>

          {loading ? (
            <div className="flex justify-center items-center h-32">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
            </div>
          ) : error ? (
            <div className="bg-red-50 border-l-4 border-red-400 p-4 text-red-700">
              Error: {error}
            </div>
          ) : (
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
          )}
        </div>

        <div className="bg-green-50 border-l-4 border-green-400 p-4">
          <p className="text-green-800 font-medium">Key Points:</p>
          <ul className="list-disc ml-6 mt-2 text-black">
            <li>Data is fetched after component mounts</li>
            <li>Great for frequently changing data</li>
            <li>Supports real-time updates</li>
            <li>Includes loading and error states</li>
            <li>Can refetch data on demand</li>
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

export default ClientDataFetching;
