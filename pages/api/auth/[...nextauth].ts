import NextAuth, { InitOptions } from "next-auth";
import Providers from "next-auth/providers";
import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import Adapters from "next-auth/adapters";

const prisma = new PrismaClient();

const options: InitOptions = {
  providers: [
    Providers.BattleNet({
      clientId: process.env.BATTLENET_CLIENT_ID!,
      clientSecret: process.env.BATTLENET_CLIENT_SECRET!,
      region: "NA",
    }),
  ],
  adapter: Adapters.Prisma.Adapter({ prisma }),
};

export default (request: NextApiRequest, response: NextApiResponse) =>
  NextAuth(request, response, options);
