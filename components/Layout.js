import Head from "next/head";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { NextSeo } from "next-seo";
import config from "../constants/config";

import Header from "./Header";
import Footer from "./Footer";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    min-height: 100vh;
    width: 100%;
    font-family: ${props =>
      props.theme.fontFamily}, Arial, Helvetica, sans-serif;
    color: ${props => props.theme.primaryColor};
    background-color: ${props => props.theme.secondaryColor};
  }
  a {
    text-decoration: none;
    color: ${props => props.theme.linkColor};
  }
  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const Content = styled.div`
  display: flex;
  flex-direction: ${props => (props.fullWidth ? "row" : "column")};
  min-height: calc(100vh - ${config.headerSize} - ${config.footerSize});
  width: ${props => (props.fullWidth ? "100%" : "80%")};
  margin: 0 auto;
  animation: fade-in 0.5s ease-in-out;

  @media only screen and (max-width: 600px) {
    width: ${props => (props.fullWidth ? "100%" : "90%")};
  }
`;

const Layout = props => (
  <div>
    <Head>
      <title>
        {config.htmlTitle} | {props.title}
      </title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        rel="shortcut icon"
        type="image/x-icon"
        href="/static/favicon.ico"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/static/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/static/favicon-16x16.png"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,700&display=swap"
        rel="stylesheet"
      />
      <link rel="canonical" href="https://maazelmusic.com/" />
    </Head>
    <ThemeProvider theme={config.theme}>
      <Container>
        <GlobalStyles />
        <NextSeo
          title={props.title}
          description={`${config.artistName} ${props.title}`}
          canonical={`${config.websiteUrl}${props.title.toLowerCase()}`}
        />
        <Header />
        <Content {...props}>{props.children}</Content>
        <Footer />
      </Container>
    </ThemeProvider>
  </div>
);

export default Layout;
