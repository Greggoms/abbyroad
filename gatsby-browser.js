import React from "react"
import { Theme } from "./src/themes/Theme"
import Layout from "./src/components/layout"
const { createGlobalStyle, ThemeProvider } = require("styled-components")

export const wrapRootElement = ({ element, props }) => {
  return (
    <ThemeProvider theme={Theme}>
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

body, html {
    font-family: ${Theme.fonts.main};
    font-display: fallback; /* <- this can be added to each @font-face definition */
    height: 100%;
  }
`
