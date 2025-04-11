import React, { useState, useEffect } from "react";
import Link from "next/link";

type Post = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
};

const ClientDataFetchingStarter = () => {
  // TODO: Implement state management for posts, loading, and error states
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // TODO: Implement data fetching using useEffect
  useEffect(() => {
    // Your task is to:
    // 1. Create a fetchPosts function
    // 2. Handle loading state
    // 3. Handle errors
    // 4. Update the posts state
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">
        Client-Side Data Fetching Exercise
      </h1>

      <div className="mb-8">
        <p className="mb-4">
          Your task is to implement client-side data fetching using the{" "}
          <code>useEffect</code> hook. Follow these steps:
        </p>

        <ol className="list-decimal ml-8 mb-6 space-y-2">
          <li>Set up state management for posts, loading, and errors</li>
          <li>Create a function to fetch posts</li>
          <li>Implement loading and error states</li>
          <li>Display the fetched data</li>
        </ol>

        <div className="border rounded-lg p-4 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Client-Side Data</h2>
            <button
              onClick={() => {
                // TODO: Implement refresh functionality
              }}
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
              {posts.length === 0 ? (
                <p className="text-gray-500 italic">
                  No posts found. Implement data fetching to load some posts!
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
          )}
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <p className="text-yellow-800 font-medium">Exercise Instructions:</p>
          <ul className="list-disc ml-6 mt-2 text-black">
            <li>Set up state for posts, loading, and errors</li>
            <li>Create a fetchPosts function</li>
            <li>Handle loading and error states</li>
            <li>Implement data refresh functionality</li>
            <li>Test your implementation thoroughly</li>
          </ul>
        </div>
      </div>

      <div className="flex space-x-4">
        <Link
          href="/concepts/data-fetching/solution/client"
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

export default ClientDataFetchingStarter;
