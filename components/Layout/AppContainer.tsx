import Navbar from "@/components/Layout/Navbar/Navbar";
import Footer from "@/components/Layout/Footer/Footer";
import { Box, Container } from "@chakra-ui/react";
import Head from "next/head";

type LayoutProps = {
  title: string;
  children: React.ReactNode;
  [x: string]: any;
};

export default function AppContainer({
  title,
  children,
  ...props
}: LayoutProps) {
  return (
    <Box bg="gray.800" textColor="gray.300">
      <Head>
        <title>{`WarcraftGuilds | ${title}`}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content={`WarcraftGuilds | ${title}`} />
        <meta
          property="og:url"
          content="https://www.imdb.com/title/tt0117500/"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Box minH="100vh" display="flex" flexDirection="column">
        <Navbar />
        <Container as="main" maxW="6xl" flex={1} {...props}>
          {children}
        </Container>
        <Footer />
      </Box>
    </Box>
  );
}
