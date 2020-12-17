import { Box, Container, Text } from "@chakra-ui/react";
import NavLink from "@/components/Layout/Navbar/NavLink";

export default function Footer() {
  return (
    <Box mt="auto" as="footer" bg="gray.900" py={10}>
      <Container
        maxW="6xl"
        display={{ base: "", lg: "flex" }}
        justifyContent="space-between"
        alignItems="baseline"
        px={10}
      >
        <Box></Box>
      </Container>
    </Box>
  );
}
