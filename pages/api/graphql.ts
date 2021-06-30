import { NextApiResponse, NextApiRequest } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  return res.status(200).json({ data: { message: "Hello World " } });
};
