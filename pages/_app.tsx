import { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Provider } from "next-auth/client";
import { LanguageProvider } from "../context/LanguageContext";
import { SWRConfig } from "swr";
import "../css/index.css";

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
      <SWRConfig
        value={{
          refreshInterval: 3000,
          fetcher: (...args) => fetch(args).then((res) => res.json()),
        }}
      >
        <ChakraProvider theme={theme}>
          <LanguageProvider>
            <Component {...pageProps} />
          </LanguageProvider>
        </ChakraProvider>
      </SWRConfig>
    </Provider>
  );
}

export default MyApp;
