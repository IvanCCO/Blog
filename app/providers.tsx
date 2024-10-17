'use client'
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { ChakraProvider } from '@chakra-ui/react'
import theme from "./theme";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider defaultTheme="dark" forcedTheme="dark">
      <ChakraProvider theme={theme}>
        {children}
      </ChakraProvider>
    </NextThemesProvider>
  );
}

