import AppContainer from "@/components/Layout/AppContainer";
import AppContent from "@/components/Layout/AppContent";
import { Button, Text } from "@chakra-ui/react";
import { FaDiscord } from "react-icons/fa";
import { signIn } from "next-auth/client";
import { GetServerSideProps } from "next";
import { getUserAuth } from "@/lib/ssrUtils";
import { useRouter } from "next/router";
import { getLocale } from "@/lib/getLocale";

export default function Login() {
  const router = useRouter();

  const { locale } = router;

  const t = getLocale(locale);

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
          colorScheme="blue"
          px={10}
          py={6}
          mb={5}
          _hover={{
            bg: "blue.600",
          }}
          leftIcon={<FaDiscord style={{ fontSize: 20 }} />}
          onClick={() =>
            signIn("discord", {
              callbackUrl: process.env.NEXT_PUBLIC_CALLBACK_URL,
            })
          }
          data-cy="login-button"
        >
          Log in with Discord
        </Button>
        <Text as="p" fontSize={{ base: "sm", lg: "md" }}>
          {t.login.description}
        </Text>
      </AppContent>
    </AppContainer>
  );
}

export const getServerSideProps: GetServerSideProps = getUserAuth;
