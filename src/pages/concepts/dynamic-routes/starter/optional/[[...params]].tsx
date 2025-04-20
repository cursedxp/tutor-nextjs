import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import type { GetStaticProps, GetStaticPaths } from "next";

type Props = {
  params: string[];
  possiblePaths: Array<{
    path: string[];
    label: string;
  }>;
};

// TODO: Implement getStaticPaths
export const getStaticPaths: GetStaticPaths = async () => {
  // Your task is to:
  // 1. Define possible paths, including the root path (empty array)
  // 2. Map them to the correct params format
  // 3. Return paths and fallback behavior
  return {
    paths: [],
    fallback: false,
  };
};

// TODO: Implement getStaticProps
export const getStaticProps: GetStaticProps<Props> = async () => {
  // Your task is to:
  // 1. Get the params array from the URL (or empty array for root)
  // 2. Create or fetch possible paths
  // 3. Return both as props
  return {
    props: {
      params: [],
      possiblePaths: [],
    },
  };
};

const OptionalParamsStarter = ({ params, possiblePaths }: Props) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Optional Parameters Exercise</h1>

      <div className="mb-8">
        <p className="mb-4">
          Your task is to implement optional catch-all parameters using{" "}
          <code>[[...params]]</code>. Follow these steps:
        </p>

        <ol className="list-decimal ml-8 mb-6 space-y-2">
          <li>Define possible paths, including root path</li>
          <li>Handle optional parameters in getStaticProps</li>
          <li>Create navigation between different paths</li>
          <li>Display the current path parameters</li>
        </ol>

        <div className="border rounded-lg p-4 mb-6">
          <h2 className="text-xl font-semibold mb-4">Current Path</h2>
          <div className="border rounded p-4">
            <div className="space-y-2">
              <div>
                <h3 className="font-semibold mb-1">Parameters:</h3>
                <p className="text-blue-600">
                  {params.length ? params.join(" / ") : "(root)"}
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Depth:</h3>
                <p className="text-blue-600">{params.length} level(s)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border rounded-lg p-4 mb-6">
          <h2 className="text-xl font-semibold mb-4">Available Routes</h2>
          <div className="grid gap-2">
            {possiblePaths.length === 0 ? (
              <p className="text-gray-500 italic">
                No routes defined. Implement getStaticProps to add some routes!
              </p>
            ) : (
              possiblePaths.map((item) => (
                <Link
                  key={item.path.join("/")}
                  href={`/concepts/dynamic-routes/starter/optional${
                    item.path.length ? "/" + item.path.join("/") : ""
                  }`}
                  className={`block p-2 rounded ${
                    item.path.join("/") === params.join("/")
                      ? "bg-blue-50 text-blue-600"
                      : "hover:bg-gray-50"
                  }`}
                >
                  {item.label} (
                  {item.path.length ? item.path.join(" / ") : "root"})
                </Link>
              ))
            )}
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <p className="text-yellow-800 font-medium">Exercise Instructions:</p>
          <ul className="list-disc ml-6 mt-2 text-black">
            <li>Define paths with varying depths</li>
            <li>Include root path (empty parameters)</li>
            <li>Handle optional parameters correctly</li>
            <li>Create navigation between paths</li>
            <li>Test with different path combinations</li>
          </ul>
        </div>
      </div>

      <div className="flex space-x-4">
        <Link
          href="/concepts/dynamic-routes/solution/optional"
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

export default OptionalParamsStarter;
