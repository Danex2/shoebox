import {
  Box,
  Container,
  Stack,
  Link,
  Text,
  StackDivider,
} from "@chakra-ui/react";
import { FaTwitter, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <Box mt="auto" as="footer" bg="gray.900" py={10}>
      <Container maxW="6xl" px={10}>
        <Stack fontSize="2xl" direction="row" mb={10}>
          <Link href="https://twitter.com" isExternal>
            <FaTwitter />
          </Link>
          <Link href="https://github.com" isExternal>
            <FaGithub />
          </Link>
        </Stack>
        <Box
          fontWeight="bold"
          fontSize="xs"
          textTransform="uppercase"
          display="flex"
          flexDirection={{ base: "column", lg: "row" }}
          alignItems={{ base: "", lg: "baseline" }}
        >
          <Stack
            direction="row"
            spacing={5}
            divider={<StackDivider borderColor="gray.600" />}
            mb={{ base: 3, lg: 0 }}
          >
            <Text>About</Text>
            <Text>Privacy Policy</Text>
            <Text>Terms of Service</Text>
          </Stack>
          <Text ml={{ base: "", lg: "auto" }}>
            Warcraftguilds &copy; {new Date().getFullYear()}
          </Text>
        </Box>
      </Container>
    </Box>
  );
}
