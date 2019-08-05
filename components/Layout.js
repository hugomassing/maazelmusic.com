import Head from 'next/head'
import styled, { createGlobalStyle } from 'styled-components'
import config from '../constants/config'

import Header from './Header';
import Footer from './Footer';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    min-height: 100vh;
    width: 100%;
    font-family: 'Roboto', sans-serif;
  }
  a {
    text-decoration: none;
  }
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`

const Content = styled.div`
  display: flex;
  flex-direction: ${props => props.fullWidth ? 'row' : 'column'};;
  min-height: calc(100vh - ${config.headerSize} - ${config.footerSize});
  width: ${props => props.fullWidth ? '100%' : '1200px'};
  margin: 0 auto;
`;

const Layout = props => (
  <div>
    <Head>
    <title>Maazel</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="shortcut icon" type="image/x-icon" href="/static/favicon.ico" />.
      <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,700&display=swap" rel="stylesheet" />
    </Head>
    <GlobalStyles />
    <Container>
      <Header />
      <Content {...props}>
        {props.children}
      </Content>
      <Footer />
    </Container>
  </div>
);

export default Layout;