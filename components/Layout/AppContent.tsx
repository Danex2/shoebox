import { Container } from "@chakra-ui/react";

type AppContentProps = {
  children: React.ReactNode;
  [x: string]: any;
};

export default function AppContent({ children, ...props }: AppContentProps) {
  return (
    <Container maxW="6xl" {...props}>
      {children}
    </Container>
  );
}
