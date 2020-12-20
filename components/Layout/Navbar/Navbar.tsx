import {
  Box,
  Container,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Image,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { RiSwordFill } from "react-icons/ri";
import NavLink from "@/components/Layout/Navbar/NavLink";
import Link from "next/link";
import { useSession, signOut } from "next-auth/client";
import { FcMenu } from "react-icons/fc";

export default function Navbar() {
  const [session] = useSession();

  const { isOpen, onOpen, onClose } = useDisclosure();
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
              <Box display={{ base: "none", lg: "flex" }} alignItems="center">
                <Image
                  src={session.user.image}
                  boxSize="30px"
                  borderRadius="full"
                  mr={2}
                />
                <Text
                  textTransform="uppercase"
                  fontSize="sm"
                  fontWeight="bold"
                  mr={10}
                >
                  {session.user.name}
                </Text>
                <Stack direction="row">
                  <NavLink href="/create" name="Create" />
                  <Text
                    fontWeight="semibold"
                    fontSize="sm"
                    textTransform="uppercase"
                    cursor="pointer"
                    transition="color 0.5s ease-in-out"
                    _hover={{
                      color: "gray.400",
                    }}
                    onClick={() => signOut()}
                  >
                    Logout
                  </Text>
                </Stack>
              </Box>
              <Box
                display={{ base: "block", lg: "none" }}
                fontSize="2xl"
                onClick={onOpen}
              >
                <FcMenu />
              </Box>

              <Drawer
                placement="left"
                onClose={onClose}
                isOpen={isOpen}
                variant="solid"
              >
                <DrawerOverlay display={{ lg: "none" }} />
                <DrawerContent
                  bg="gray.700"
                  color="white"
                  display={{ lg: "none" }}
                >
                  <DrawerHeader
                    borderBottom="1px"
                    borderBottomColor="gray.500"
                    display="flex"
                  >
                    <Image
                      src={session.user.image}
                      boxSize="30px"
                      borderRadius="full"
                      mr={2}
                    />
                    {session.user.name}
                  </DrawerHeader>
                  <DrawerBody>
                    <NavLink href="/create" name="Create" />
                    <Text
                      fontWeight="semibold"
                      fontSize="sm"
                      textTransform="uppercase"
                      cursor="pointer"
                      transition="color 0.5s ease-in-out"
                      _hover={{
                        color: "gray.400",
                      }}
                      onClick={() => signOut()}
                    >
                      Logout
                    </Text>
                  </DrawerBody>
                </DrawerContent>
              </Drawer>
            </>
          ) : (
            <NavLink href="/login" name="Login" />
          )}
        </Box>
      </Container>
    </Box>
  );
}
