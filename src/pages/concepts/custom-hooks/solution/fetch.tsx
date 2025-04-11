import React, { useState, useEffect } from "react";
import Link from "next/link";

// Custom hook for data fetching
const useFetch = <T,>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        setData(json);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

// Example component using the custom hook
const FetchExample: React.FC = () => {
  const { data, loading, error } = useFetch<{
    id: number;
    title: string;
    completed: boolean;
  }>("https://jsonplaceholder.typicode.com/todos/1");

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Custom Fetch Hook (Solution)</h1>

      <div className="mb-8">
        <p className="mb-4">
          This example demonstrates a custom hook for data fetching with loading
          and error states.
        </p>

        {/* Data Display */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Fetched Data</h2>
          {loading && <div className="text-gray-600">Loading data...</div>}
          {error && <div className="text-red-600">Error: {error}</div>}
          {data && (
            <div className="bg-white p-4 rounded-lg shadow">
              <pre className="whitespace-pre-wrap text-black">
                {JSON.stringify(data, null, 2)}
              </pre>
            </div>
          )}
        </div>

        {/* Hook Implementation */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Hook Implementation</h2>
          <div className="bg-gray-50 p-4 rounded-lg">
            <pre className="text-sm overflow-x-auto text-black">
              {`const useFetch = <T,>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(\`HTTP error! status: \${response.status}\`);
        }
        const json = await response.json();
        setData(json);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};`}
            </pre>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
          <p className="text-blue-800 font-medium">Key Features:</p>
          <ul className="list-disc ml-6 mt-2 text-gray-800">
            <li>Type-safe with TypeScript generics</li>
            <li>Handles loading and error states</li>
            <li>Automatic cleanup with useEffect</li>
            <li>Reusable across components</li>
            <li>Proper error handling</li>
          </ul>
        </div>
      </div>

      <div className="flex space-x-4">
        <Link
          href="/concepts/custom-hooks/starter/fetch"
          className="text-blue-600 hover:underline"
        >
          View Starter Version
        </Link>
        <Link href="/" className="text-gray-600 hover:underline">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default FetchExample;
