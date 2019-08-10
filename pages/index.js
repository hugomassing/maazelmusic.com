import styled from 'styled-components'
import Layout from '../components/Layout'
import Button from '../components/Button'
import config from '../constants/config'

import { hex2rgba } from '../utils/utils'

const Container = styled.div`
  width: 100%;
  background-color: ${props => props.theme.primaryColor};
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
    ${props => props.theme.primaryColor},
    ${props => hex2rgba(props.theme.primaryColor, 0.5)}
  );
`
const Infos = styled.div`
  color: ${props => props.theme.secondaryColor};
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
    <Layout fullWidth title="Home">
      <Container>
        <Overlay>
          <Infos>
            <Title>
              {config.artistName}
            </Title>
            <Tagline>
              {config.tagline}
            </Tagline>
            <a href={config.actionButtonUrl} target="_blank" rel="noopener noreferrer">
               <Button>
                  {config.actionButtonLabel}
               </Button>
            </a>
          </Infos>
        </Overlay>
      </Container>
    </Layout>
  );
  
  export default Home;