import { useEffect } from "react";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import { Box } from "@chakra-ui/react";

type LayoutProps = {
  title: string;
  children: React.ReactNode;
};

export default function AppContainer({ title, children }: LayoutProps) {
  useEffect(() => {
    document.title = title;
  }, []);

  return (
    <Box bg="gray.800" textColor="gray.300">
      <Box minH="100vh" display="flex" flexDirection="column">
        <Navbar />
        <Box as="main">{children}</Box>
        <Footer />
      </Box>
    </Box>
  );
}
