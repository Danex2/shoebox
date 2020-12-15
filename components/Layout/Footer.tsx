import { Box, Container } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box mt="auto" as="footer" bg="gray.900" py={4}>
      <Container maxW="6xl">this is a footer</Container>
    </Box>
  );
}
