import { useRouter } from 'next/router';
import styled from 'styled-components'
import Icon from '../components/Icon'
import config from '../constants/config'

import {
  faFacebookSquare,
  faTwitter,
  faSoundcloud,
  faInstagram,
  faSpotify,
  faApple,
  faYoutube
} from '@fortawesome/free-brands-svg-icons'

const Container = styled.div`
  height: ${config.footerSize};
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${props => props.theme.secondaryColor};
  background-color: ${props => props.theme.footerColor};
`
const Navigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 30px;
`
const Logo = styled.a`
  margin-left: 30px;
`

const A = styled.a`
  margin: 10px 20px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    left: 20%;
    display: inline-block;
    height: 1em;
    border-bottom: 2px solid;
    margin-top: 3px;
    transition: width .25s;
    width: ${props => props.selected ? '60%' : '0'}
  }
  &:hover,
  &:focus,
  &:active {
   &:after {
      width: 60%;
   }
  }
`
const Copyright = styled.span`    
  margin-left: 30px;
`

const Footer = () => {
  const { pathname } = useRouter();
  const { links } = config;
  return (<Container>
      <Copyright>© 2019 Maazel / qatataq</Copyright> 
      <Navigation>
        <Icon link={links.facebook} icon={faFacebookSquare}></Icon>
        <Icon link={links.twitter} icon={faTwitter}></Icon>
        <Icon link={links.instagram} icon={faInstagram}></Icon>
        <Icon link={links.soundcloud} icon={faSoundcloud}></Icon>
        <Icon link={links.spotify} icon={faSpotify}></Icon>
        <Icon link={links.appleMusic} icon={faApple}></Icon>
        <Icon link={links.youtube} icon={faYoutube}></Icon>
      </Navigation>
    </Container>)
};
  
  export default Footer;