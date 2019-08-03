import styled from 'styled-components'
import Router from 'next/router'
import Layout from '../components/Layout'
import Button from '../components/Button'
import config from '../constants/config'

const Container = styled.div`
  width: 100%;
  background-color: black;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${config.backgroundUrl});
`
const Overlay = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  background: linear-gradient(
    to bottom,
    #090909,
    rgba(9, 9, 9, 0)
  );
`
const Infos = styled.div`
  color: white;
  margin: 0 10%;;
  width: 60%;
`

const Title = styled.h1`
  font-size: 50px;
  font-weight: bold;
  text-transform: uppercase;
  margin: 10px 0;
`
const Tagline = styled.span`
  font-size: 25px;
`

const Home = () => (
    <Layout fullWidth>
      <Container>
        <Overlay>
          <Infos>
            <Title>
              {config.artistName}
            </Title>
            <Tagline>
              {config.tagline}
            </Tagline>
            <Button onClick={() => Router.push(config.actionButtonUrl)}>
              {config.actionButtonLabel}
            </Button> 
          </Infos>
        </Overlay>
      </Container>
    </Layout>
  );
  
  export default Home;