import React from "react"
import { theme } from "./src/themes/theme"
import Layout from "./src/components/layout"
const { createGlobalStyle, ThemeProvider } = require("styled-components")

export const wrapRootElement = ({ element, props }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout {...props}>{element}</Layout>
    </ThemeProvider>
  )
}

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    font-family: ${theme.fonts.main};
    font-display: fallback; /* <- this can be added to each @font-face definition */
    height: 100%;
  }
`
