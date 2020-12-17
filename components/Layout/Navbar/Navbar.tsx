import { Box, Container, Text } from "@chakra-ui/react";
import { RiSwordFill } from "react-icons/ri";
import NavLink from "@/components/Layout/Navbar/NavLink";
import Link from "next/link";

export default function Navbar() {
  return (
    <Box as="nav" bg="gray.900">
      <Container
        maxW="6xl"
        py={6}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Link href="/">
          <Text
            as="a"
            fontWeight="bold"
            fontSize="md"
            textTransform="uppercase"
            ml={2}
            display="flex"
            alignItems="center"
            cursor="pointer"
          >
            <RiSwordFill style={{ marginRight: 5 }} />
            warcraftguilds
          </Text>
        </Link>
        <NavLink href="/login" name="Login" />
      </Container>
    </Box>
  );
}
