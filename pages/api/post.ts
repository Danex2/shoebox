import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/client";
import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const session: any = await getSession({ req });
    if (!session) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const { method } = req;
    if (method === "POST") {
      await db.post.create({
        data: {
          ...JSON.parse(req.body),
          userId: session.user.id,
        },
      });
      return res.status(201).json({ message: "Post created successfully!" });
    }
  } catch (error) {
    return res.status(500).json({ message: "There was an error" });
  }
};
