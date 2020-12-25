import { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Provider } from "next-auth/client";
import { LanguageProvider } from "../context/LanguageContext";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: "Archivo, sans-serif",
      },
    },
  },
  initialColorMode: "dark",
  useSystemColorMode: true,
});

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
