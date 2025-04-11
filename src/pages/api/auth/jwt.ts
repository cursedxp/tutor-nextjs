import { NextApiRequest, NextApiResponse } from "next";
import { generateToken, verifyToken, JWTPayload } from "@/utils/jwt";

// For demo purposes, we'll use a simple in-memory user store
const users = [
  {
    id: "1",
    email: "admin@example.com",
    password: "admin123",
    role: "admin",
  },
  {
    id: "2",
    email: "user@example.com",
    password: "user123",
    role: "user",
  },
];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    try {
      const payload: JWTPayload = {
        userId: user.id,
        email: user.email,
        role: user.role,
      };

      const token = generateToken(payload);
      return res.status(200).json({ token });
    } catch (error) {
      return res.status(500).json({ error: "Failed to generate token" });
    }
  }

  if (req.method === "GET") {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({ error: "No token provided" });
    }

    try {
      const payload = verifyToken(token);
      return res.status(200).json(payload);
    } catch (error) {
      return res.status(401).json({ error: "Invalid token" });
    }
  }

  return res.status(405).json({ error: "Method not allowed" });
}
