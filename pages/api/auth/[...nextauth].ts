import NextAuth, { InitOptions } from "next-auth";
import Providers from "next-auth/providers";
import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

let prisma;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

const options: InitOptions = {
  providers: [
    Providers.BattleNet({
      clientId: process.env.BATTLENET_CLIENT_ID!,
      clientSecret: process.env.BATTLENET_CLIENT_SECRET!,
      region: "NA",
    }),
  ],
};

export default (request: NextApiRequest, response: NextApiResponse) =>
  NextAuth(request, response, options);
