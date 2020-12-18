import {
  Box,
  Container,
  Image,
  Stack,
  Text,
  StackDivider,
} from "@chakra-ui/react";
import { RiSwordFill } from "react-icons/ri";
import NavLink from "@/components/Layout/Navbar/NavLink";
import Link from "next/link";
import { useSession, signOut } from "next-auth/client";
import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";

export default function Navbar() {
  const [session] = useSession();
  const [menu, showMenu] = useState(false);

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
        <Box>
          {session ? (
            <>
              <Box display="flex" alignItems="center" position="relative">
                <Text
                  mr={3}
                  textTransform="uppercase"
                  fontSize="sm"
                  fontWeight="bold"
                >
                  {session.user.name}
                </Text>
                <Image
                  src={session.user.image}
                  boxSize="40px"
                  borderRadius="full"
                />
                <FaChevronDown
                  style={{
                    marginLeft: 10,
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                  onClick={() => showMenu(!menu)}
                />
                <Stack
                  position="absolute"
                  left="70px"
                  top="50px"
                  bg="gray.900"
                  boxShadow="lg"
                  w="200px"
                  py={5}
                  px={5}
                  borderRadius="5px"
                  display={menu ? "block" : "none"}
                >
                  <NavLink href="/create" name="Create" />
                  <Text
                    fontWeight="semibold"
                    fontSize="sm"
                    textTransform="uppercase"
                    py={2}
                    px={3}
                    borderRadius={3}
                    transition="background 0.2s ease-in-out"
                    cursor="pointer"
                    _hover={{
                      bg: "blue.700",
                    }}
                    onClick={() => signOut()}
                  >
                    Logout
                  </Text>
                </Stack>
              </Box>
            </>
          ) : (
            <NavLink href="/login" name="Login" />
          )}
        </Box>
      </Container>
    </Box>
  );
}
