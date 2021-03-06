import { useRef } from "react";

import styled, { css } from "styled-components";
import Markdown from "markdown-to-jsx";

import Layout from "../components/Layout";
import Button from "../components/Button";
import config from "../constants/config";
import Title from "../components/Title";
import ReleaseCard from "../components/Release";
import LazyLoad from "react-lazyload";

import releases from "../constants/releases";
import biography from "../constants/biography.md";

const Section = styled.div`
  margin-bottom: 60px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.theme.primaryColor};
  :first-child {
    margin-top: 60px;
  }
`;

const Bio = styled(Markdown)`
  text-align: justify;
  align-self: center;
  margin: 20px 60px;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
  a {
    text-decoration: underline;
    color: ${(props) => props.theme.primaryColor};
  }
`;

const Pictures = styled.div`
  margin: 50px 60px;
  width: 100%;
  display: flex;
  align-self: center;
  justify-content: space-between;
  div {
    flex-basis: calc(50% - 4px);
    height: 700px;
    flex-grow: 2;
    @media only screen and (max-width: 600px) {
      height: 250px;
    }
    :first-child {
      margin-right: 5px;
    }
    :last-child {
      margin-left: 4px;
    }
  }
`;

const BioImg = styled.img`
  height: 700px;
  width: 100%;
  object-fit: cover;
  filter: drop-shadow(0px 4px 15px rgba(0, 0, 0, 0.35));
`;

const ContactMe = styled.a`
  align-self: center;
`;

const ReleasesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ListenNowButton = styled(Button)`
  margin-top: 30px;
`;

const getEmail = (reversedEmail) => {
  location.href = `mailto:${reversedEmail
    .split("")
    .reverse()
    .join("")}?subject=About Maazel`;
};

const Home = () => {
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const releasesRef = useRef(null);

  const refs = {
    about: aboutRef,
    releases: releasesRef,
    contact: contactRef,
  };

  return (
    <Layout fullWidth title="Home" refs={refs}>
      <Section>
        <ReleaseCard release={releases[0]} big />
        <a
          href={releases[0].streamUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            href={releases[0].streamUrl}
            target="_blank"
            rel="noopener noreferrer"
            gradient
          >
            {releases[0].presave ? "Pre-save" : "Stream"}
          </Button>
        </a>
      </Section>
      <Title ref={releasesRef}>Latest releases</Title>
      <Section>
        <ReleasesContainer>
          {releases &&
            releases
              .filter((item, i) => i !== 0 && i < 4)
              .map((release, index) => (
                <ReleaseCard
                  key={`${index}_${release.name}`}
                  release={release}
                />
              ))}
        </ReleasesContainer>
      </Section>
      <Title>Other releases</Title>
      <Section>
        <ReleasesContainer>
          {releases &&
            releases
              .filter((item, i) => i >= 4)
              .map((release, index) => (
                <ReleaseCard
                  key={`${index}_${release.name}`}
                  release={release}
                />
              ))}
        </ReleasesContainer>

        <ListenNowButton
          href={config.actionButtonUrl}
          target="_blank"
          rel="noopener noreferrer"
          gradient
        >
          Listen more
        </ListenNowButton>
      </Section>
      <Title ref={aboutRef}>About Maazel</Title>
      <Section>
        <Bio>{biography}</Bio>
        <Pictures>
          <LazyLoad style={Pictures}>
            <BioImg src={config.bioPicture1} alt="Maazel press picture" />
          </LazyLoad>
          <LazyLoad style={Pictures}>
            <BioImg src={config.bioPicture2} alt="Maazel press picture" />
          </LazyLoad>
        </Pictures>
        <ContactMe
          ref={contactRef}
          onClick={() => getEmail(config.reversedContactMail)}
        >
          <Button primary gradient>
            Send an email
          </Button>
        </ContactMe>
      </Section>
    </Layout>
  );
};

export default Home;
