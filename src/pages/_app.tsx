import React from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";

import { extendTheme } from "@chakra-ui/react";

import { createBreakpoints } from "@chakra-ui/theme-tools";
import { Header } from "../components/header";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const breakpoints = createBreakpoints({
    sm: "480px",
    md: "768px",
    lg: "1024px",
    xl: "2560px",
  });

  const extendedTheme = {
    breakpoints,
    fonts: {
      heading: "Roboto",
      body: "Roboto",
    },
    colors: { brand: "#F56565" },
  };
  const customTheme = extendTheme(extendedTheme);
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ChakraProvider theme={customTheme}>
        <Header />
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
};

export default App;
