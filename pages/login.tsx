import AppContainer from "@/components/Layout/AppContainer";
import AppContent from "@/components/Layout/AppContent";
import { Button, Text } from "@chakra-ui/react";
import { FaDiscord } from "react-icons/fa";
import { signIn, getSession } from "next-auth/client";
import { GetServerSideProps } from "next";

export default function Login() {
  return (
    <AppContainer
      title="Login"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <AppContent textAlign="center">
        <Button
          color="gray.100"
          bg="blue.700"
          px={10}
          py={6}
          mb={3}
          _hover={{
            bg: "blue.600",
          }}
          leftIcon={<FaDiscord style={{ fontSize: 20 }} />}
          onClick={() =>
            signIn("discord", { callbackUrl: "http://localhost:3000/" })
          }
          data-cy="login-button"
        >
          Log in with Discord
        </Button>
        <Text as="p" fontSize={{ base: "sm", lg: "md" }}>
          We use your discord account as a way of authenticating you and only
          store your username in our records. We will never send you e-mails or
          ask you for a password. Ever.
        </Text>
      </AppContent>
    </AppContainer>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  if (session) {
    return {
      redirect: {
        permanent: false,
        destination: "http://localhost:3000/",
      },
    };
  }
  return {
    props: {},
  };
};
