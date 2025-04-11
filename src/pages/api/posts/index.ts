import type { NextApiRequest, NextApiResponse } from "next";
import type { Post } from "./types";
import { getPosts, addPost } from "./data";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Post[] | Post | { error: string }>
) {
  switch (req.method) {
    case "GET":
      res.status(200).json(getPosts());
      break;

    case "POST":
      const { title, content } = req.body;

      if (!title || !content) {
        res.status(400).json({ error: "Title and content are required" });
        return;
      }

      const newPost: Post = {
        id: Date.now().toString(),
        title,
        content,
        createdAt: new Date().toISOString(),
      };

      const createdPost = addPost(newPost);
      res.status(201).json(createdPost);
      break;

    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
