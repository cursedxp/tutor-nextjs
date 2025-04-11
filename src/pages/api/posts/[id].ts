import type { NextApiRequest, NextApiResponse } from "next";
import type { Post } from "./types";
import { getPostById, updatePost, deletePost } from "./data";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Post | { error: string }>
) {
  const { id } = req.query;

  if (!id || typeof id !== "string") {
    res.status(400).json({ error: "Post ID is required" });
    return;
  }

  const post = getPostById(id);
  if (!post) {
    res.status(404).json({ error: "Post not found" });
    return;
  }

  switch (req.method) {
    case "GET":
      res.status(200).json(post);
      break;

    case "PUT":
      const { title, content } = req.body;

      if (!title || !content) {
        res.status(400).json({ error: "Title and content are required" });
        return;
      }

      const updatedPost = updatePost(id, { title, content });
      if (!updatedPost) {
        res.status(404).json({ error: "Post not found" });
        return;
      }
      res.status(200).json(updatedPost);
      break;

    case "DELETE":
      const success = deletePost(id);
      if (!success) {
        res.status(404).json({ error: "Post not found" });
        return;
      }
      res.status(204).end();
      break;

    default:
      res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
