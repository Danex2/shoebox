import { useEffect } from "react";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import { Box } from "@chakra-ui/react";
import Head from "next/head";

type LayoutProps = {
  title: string;
  children: React.ReactNode;
};

export default function AppContainer({ title, children }: LayoutProps) {
  return (
    <Box bg="gray.800" textColor="gray.300">
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content={`Warcraft Guilds | ${title}`} />
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
        <Box as="main">{children}</Box>
        <Footer />
      </Box>
    </Box>
  );
}
