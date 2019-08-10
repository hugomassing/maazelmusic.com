import App, { Container } from "next/app";
import React from "react";
import { DefaultSeo } from "next-seo";
import config from "../constants/config";

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <DefaultSeo {...config.SEO} />
        <Component {...pageProps} />
      </Container>
    );
  }
}
