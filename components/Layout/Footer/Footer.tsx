import {
  Box,
  Container,
  Stack,
  Link,
  Text,
  StackDivider,
  Select,
} from "@chakra-ui/react";
import { FaTwitter, FaGithub } from "react-icons/fa";
import { useRouter } from "next/router";
import en from "../../../translations/en";
import fr from "../../../translations/fr";

export default function Footer() {
  const router = useRouter();
  const { locale } = router;

  const t = locale === "en" ? en : fr;

  const changeLanguage = (e) => {
    const locale = e.target.value;
    router.push("/about", "/about", { locale });
  };

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
            direction={{ base: "column", lg: "row" }}
            spacing={5}
            divider={<StackDivider borderColor="gray.600" />}
            mb={{ base: 3, lg: 0 }}
          >
            <Link href="/about">About</Link>
            <Text>Privacy Policy</Text>
            <Text>Terms of Service</Text>
          </Stack>
          <Text ml={{ base: "", lg: "auto" }} mr={3} mb={{ base: 3, lg: 0 }}>
            Warcraftguilds &copy; {new Date().getFullYear()}
          </Text>
          <Select w="80px" borderColor="gray.700" onChange={changeLanguage}>
            <option value="en" style={{ background: "#2D3748" }}>
              EN
            </option>
            <option value="fr" style={{ background: "#2D3748" }}>
              FR
            </option>
          </Select>
        </Box>
      </Container>
    </Box>
  );
}
