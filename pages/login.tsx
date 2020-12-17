import AppContainer from "@/components/Layout/AppContainer";
import AppContent from "@/components/Layout/AppContent";
import { Button, Text } from "@chakra-ui/react";
import { FaBattleNet } from "react-icons/fa";

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
          color="white"
          bg="blue.500"
          px={10}
          py={5}
          mb={3}
          _hover={{
            bg: "blue.400",
          }}
          leftIcon={<FaBattleNet style={{ fontSize: 20 }} />}
        >
          Log in with Battle.net
        </Button>
        <Text as="p" fontSize={{ base: "sm", lg: "md" }}>
          We use your battle.net account as a way of authenticating you and only
          store your username in our records. We will never send you e-mails or
          ask you for a password. Ever.
        </Text>
      </AppContent>
    </AppContainer>
  );
}
