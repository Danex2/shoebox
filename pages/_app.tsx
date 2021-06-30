import { AppProps } from "next/app";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { Provider } from "next-auth/client";
import { LanguageProvider } from "context/LanguageContext";
import "css/index.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider session={pageProps.session}>
      <ChakraProvider theme={theme}>
        <LanguageProvider>
          <Component {...pageProps} />
        </LanguageProvider>
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;
