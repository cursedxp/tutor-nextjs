import type { NextApiRequest, NextApiResponse } from "next";

type User = {
  id: string;
  name: string;
  email: string;
  role: string;
};

// Mock user data
const users: Record<string, User> = {
  "1": {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    role: "admin",
  },
  "2": {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    role: "user",
  },
  "3": {
    id: "3",
    name: "Bob Johnson",
    email: "bob@example.com",
    role: "user",
  },
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<User | { error: string }>
) {
  const { id } = req.query;

  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
    return;
  }

  if (!id || typeof id !== "string") {
    res.status(400).json({ error: "User ID is required" });
    return;
  }

  const user = users[id];
  if (!user) {
    res.status(404).json({ error: "User not found" });
    return;
  }

  res.status(200).json(user);
}
