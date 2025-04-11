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

// Generate the paths at build time
export const getStaticPaths: GetStaticPaths = async () => {
  // In a real app, these would come from a database or API
  const possiblePaths = [
    { path: ["category", "electronics"], label: "Electronics Category" },
    { path: ["category", "electronics", "laptops"], label: "Laptops" },
    { path: ["category", "electronics", "phones"], label: "Phones" },
    { path: ["category", "clothing"], label: "Clothing Category" },
    { path: ["category", "clothing", "shirts"], label: "Shirts" },
    { path: ["category", "clothing", "pants"], label: "Pants" },
    { path: ["search", "electronics"], label: "Search Electronics" },
    { path: ["search", "clothing"], label: "Search Clothing" },
  ];

  const paths = possiblePaths.map((item) => ({
    params: { params: item.path },
  }));

  return {
    paths,
    fallback: false, // Show 404 for non-existent paths
  };
};

// Fetch data for the current path
export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const pathParams = (params?.params as string[]) || [];

  // In a real app, these would come from a database or API
  const possiblePaths = [
    { path: ["category", "electronics"], label: "Electronics Category" },
    { path: ["category", "electronics", "laptops"], label: "Laptops" },
    { path: ["category", "electronics", "phones"], label: "Phones" },
    { path: ["category", "clothing"], label: "Clothing Category" },
    { path: ["category", "clothing", "shirts"], label: "Shirts" },
    { path: ["category", "clothing", "pants"], label: "Pants" },
    { path: ["search", "electronics"], label: "Search Electronics" },
    { path: ["search", "clothing"], label: "Search Clothing" },
  ];

  return {
    props: {
      params: pathParams,
      possiblePaths,
    },
  };
};

const MultipleParams = ({ params, possiblePaths }: Props) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Multiple Parameters Example</h1>

      <div className="mb-8">
        <p className="mb-4">
          This page demonstrates multiple dynamic parameters using{" "}
          <code>[...params]</code>. The route matches multiple segments in the
          URL path.
        </p>

        <div className="border rounded-lg p-4 mb-6">
          <h2 className="text-xl font-semibold mb-4">Current Path</h2>
          <div className="border rounded p-4">
            <div className="space-y-2">
              <div>
                <h3 className="font-semibold mb-1">Parameters:</h3>
                <p className="text-blue-600">{params.join(" / ")}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Depth:</h3>
                <p className="text-blue-600">{params.length} level(s)</p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Type:</h3>
                <p className="text-blue-600">
                  {params[0] === "category" ? "Category View" : "Search View"}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border rounded-lg p-4 mb-6">
          <h2 className="text-xl font-semibold mb-4">Available Routes</h2>
          <div className="grid gap-2">
            {possiblePaths.map((item) => (
              <Link
                key={item.path.join("/")}
                href={`/concepts/dynamic-routes/solution/multiple/${item.path.join(
                  "/"
                )}`}
                className={`block p-2 rounded ${
                  item.path.join("/") === params.join("/")
                    ? "bg-blue-50 text-blue-600"
                    : "hover:bg-gray-50"
                }`}
              >
                {item.label} ({item.path.join(" / ")})
              </Link>
            ))}
          </div>
        </div>

        <div className="bg-green-50 border-l-4 border-green-400 p-4">
          <p className="text-green-800 font-medium">Key Points:</p>
          <ul className="list-disc ml-6 mt-2 text-black">
            <li>Uses [...params] for multiple parameters</li>
            <li>Handles different types of paths (category, search)</li>
            <li>Supports nested navigation</li>
            <li>Great for hierarchical data</li>
            <li>Supports static generation with multiple paths</li>
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

export default MultipleParams;
