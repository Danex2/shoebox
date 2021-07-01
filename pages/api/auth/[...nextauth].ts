import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { PrismaClient } from "@prisma/client";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextApiRequest, NextApiResponse } from "next";

declare global {
  namespace NodeJS {
    interface Global {
      prisma: any;
    }
  }
}

let prisma;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}
const options = {
  providers: [
    Providers.Discord({
      clientId: process.env.DISCORD_CLIENT_ID!,
      clientSecret: process.env.DISCORD_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.SECRET,
  adapter: PrismaAdapter(prisma),
  session: {
    jwt: false,
    maxAge: 30 * 24 * 60 * 60,
    updateAge: 24 * 60 * 60,
  },
  callbacks: {
    redirect: async (url, baseUrl) => {
      return url.startsWith(baseUrl)
        ? Promise.resolve(url)
        : Promise.resolve(baseUrl);
    },
    session: async (session: any, user: any) => {
      session.user.id = user.id;
      session.user.createdAt = user.createdAt;

      return Promise.resolve(session);
    },
  },
};

const handler = (request: NextApiRequest, response: NextApiResponse) => NextAuth(request, response, options);

export default handler