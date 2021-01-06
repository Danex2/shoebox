import {
  Box,
  Container,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { RiSwordFill } from "react-icons/ri";
import NavLink from "@/components/Layout/Navbar/NavLink";
import Link from "next/link";
import { useSession, signOut } from "next-auth/client";
import { FcMenu } from "react-icons/fc";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { getLocale } from "@/lib/getLocale";
import { useRouter } from "next/router";

export default function Navbar() {
  const [session] = useSession();

  const router = useRouter();

  const { locale } = router;

  const t = getLocale(locale);

  const [showDropdown, setShowDropdown] = useState(false);

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
              <Box
                display={{ base: "none", lg: "flex" }}
                alignItems="center"
                position="relative"
              >
                <Text
                  mr={2}
                  fontSize="sm"
                  textTransform="uppercase"
                  fontWeight="semibold"
                >
                  {session.user.name}
                </Text>
                <ChevronDownIcon
                  w={7}
                  h={7}
                  onClick={() => setShowDropdown(!showDropdown)}
                  cursor="pointer"
                />
                {showDropdown ? (
                  <>
                    <Box
                      position="absolute"
                      bg="gray.700"
                      top={10}
                      px={10}
                      w={200}
                      py={15}
                      zIndex={5}
                      borderRadius={10}
                      shadow="lg"
                      borderColor="gray.100"
                      border={1}
                    >
                      <Stack direction="column">
                        <NavLink href="/create" name={t.navbar.create} />
                        <NavLink href="/me" name={t.navbar.guildAd} />
                        <Text
                          fontWeight="semibold"
                          fontSize="sm"
                          cursor="pointer"
                          transition="color 0.5s ease-in-out"
                          _hover={{
                            color: "gray.400",
                          }}
                          onClick={() => signOut()}
                        >
                          {t.navbar.logout}
                        </Text>
                      </Stack>
                    </Box>
                  </>
                ) : null}
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
                    {session.user.name}
                  </DrawerHeader>
                  <DrawerBody>
                    <NavLink href="/create" name="Create" />
                    <NavLink href="/me" name="Guild Ad" />
                    <Text
                      fontWeight="semibold"
                      fontSize="sm"
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
