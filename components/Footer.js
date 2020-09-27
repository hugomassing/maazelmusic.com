import { useRouter } from "next/router";
import styled from "styled-components";
import Icon from "../components/Icon";
import config from "../constants/config";

import {
  faFacebookSquare,
  faTwitter,
  faSoundcloud,
  faInstagram,
  faSpotify,
  faApple,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Container = styled.div`
  height: ${config.footerSize};
  flex-grow: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: ${(props) => props.theme.primaryColor};
`;
const Navigation = styled.div`
  display: flex;
  align-items: center;
`;

const Copyright = styled.span``;

const Footer = () => {
  const { pathname } = useRouter();
  const { links } = config;
  return (
    <Container>
      <Copyright>© 2020 Maazel / qatataq</Copyright>
      <Navigation>
        <Icon link={links.facebook} icon={faFacebookSquare}></Icon>
        <Icon link={links.twitter} icon={faTwitter}></Icon>
        <Icon link={links.instagram} icon={faInstagram}></Icon>
        <Icon link={links.soundcloud} icon={faSoundcloud}></Icon>
        <Icon link={links.spotify} icon={faSpotify}></Icon>
        <Icon link={links.appleMusic} icon={faApple}></Icon>
        <Icon link={links.youtube} icon={faYoutube}></Icon>
      </Navigation>
    </Container>
  );
};

export default Footer;
