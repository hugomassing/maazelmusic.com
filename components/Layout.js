import Head from 'next/head'
import { createGlobalStyle } from 'styled-components'

import Header from './Header';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    min-height: 100%;
    width: 100%;
    font-family: 'Roboto', sans-serif;
  }
`
;
const Layout = props => (
  <div>
    <Head>
      <title>Maazel</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,700&display=swap" rel="stylesheet" />
    </Head>
    <GlobalStyles />
    <Header />
    {props.children}
  </div>
);

export default Layout;