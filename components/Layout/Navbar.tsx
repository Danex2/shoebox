import { Box, Container } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Box as="nav" bg="gray.900">
      <Container maxW="6xl" py={4}>
        <h1>navbar</h1>
      </Container>
    </Box>
  );
}
