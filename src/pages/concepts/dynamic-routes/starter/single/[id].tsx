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

export const getStaticPaths: GetStaticPaths = async () => {
  // In a real app, this would come from an API or database
  const posts = [
    { id: "1", title: "First Post", content: "Content of first post" },
    { id: "2", title: "Second Post", content: "Content of second post" },
  ];

  const paths = posts.map((post) => ({
    params: { id: post.id },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  if (!params?.id) {
    return {
      props: {
        post: null,
      },
    };
  }

  // In a real app, this would come from an API or database
  const posts = [
    { id: "1", title: "First Post", content: "Content of first post" },
    { id: "2", title: "Second Post", content: "Content of second post" },
  ];

  const post = posts.find((p) => p.id === params.id) || null;

  return {
    props: {
      post,
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
        <h1 className="text-3xl font-bold mb-6">Post Not Found</h1>
        <p className="mb-4">The requested post could not be found.</p>
        <Link href="/" className="text-blue-600 hover:underline">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">{post.title}</h1>
      <div className="prose max-w-none">
        <p>{post.content}</p>
      </div>
      <div className="mt-6">
        <Link href="/" className="text-blue-600 hover:underline">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default SinglePostStarter;
