import { AppProps } from "next/app";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { Provider as NextAuthProvider } from "next-auth/client";
import { LanguageProvider } from "context/LanguageContext";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "lib/apolloClient";
import "css/index.css";

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState);
  return (
    <ApolloProvider client={apolloClient}>
      <NextAuthProvider session={pageProps.session}>
        <ChakraProvider theme={theme}>
          <LanguageProvider>
            <Component {...pageProps} />
          </LanguageProvider>
        </ChakraProvider>
      </NextAuthProvider>
    </ApolloProvider>
  );
}

export default MyApp;
