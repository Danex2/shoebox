import { getSession } from "next-auth/client";

export const getUserAuth = async (context) => {
  const session = await getSession(context);
  if (session) {
    return {
      redirect: {
        permanent: false,
        destination: process.env.REDIRECT_URL,
      },
    };
  }
  return {
    props: {},
  };
};
