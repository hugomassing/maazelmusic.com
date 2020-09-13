import styled from "styled-components";
import Markdown from "markdown-to-jsx";

import Layout from "../components/Layout";
import Button from "../components/Button";
import config from "../constants/config";
import Title from "../components/title";
import ReleaseCard from "../components/Release";

import releases from "../constants/releases";
import biography from "../constants/biography.md";

const Bio = styled(Markdown)`
  text-align: justify;
  align-self: center;
  margin: 20px 0;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
  a {
    text-decoration: underline;
  }
`;

const Pictures = styled.div`
  margin: 50px 0;
  width: 80%;
  display: flex;
  align-self: center;
  justify-content: space-between;
  &:first-child {
    margin-right: 5px;
  }
`;

const BioImg = styled.img`
  height: 700px;
  width: 49.5%;
  object-fit: cover;
  @media only screen and (max-width: 600px) {
    height: 250px;
  }
`;

const ContactMe = styled.a`
  align-self: center;
`;

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

const ReleasesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 50px 0;
`;

const ListenNowButton = styled(Button)`
  margin-top: 30px;
`;

const Img = styled.img`
  height: 300px;
`;

const Home = () => (
  <Layout fullWidth title="Home">
    <Section>
      <Img src="static/Maazel_Right_Now_art.jpg" alt="Right Now" />
      <ListenNowButton
        href={config.actionButtonUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        {config.actionButtonLabel}
      </ListenNowButton>
    </Section>
    <Title>Latest releases</Title>
    <Section>
      <ReleasesContainer>
        {releases &&
          releases
            .splice(0, 3)
            .map((release, index) => (
              <ReleaseCard key={`${index}_${release.name}`} release={release} />
            ))}
      </ReleasesContainer>
    </Section>
    <Title>Other releases</Title>
    <Section>
      <ReleasesContainer>
        {releases &&
          releases
            .filter((item, i) => i >= 3)
            .map((release, index) => (
              <ReleaseCard key={`${index}_${release.name}`} release={release} />
            ))}
      </ReleasesContainer>
    </Section>
    <Section>
      <Bio>{biography}</Bio>
      <ContactMe href={`mailto:${config.contactMail}`}>
        <Button primary>Contact me</Button>
      </ContactMe>
      <Pictures>
        <BioImg src={config.bioPicture1} />
        <BioImg src={config.bioPicture2} />
      </Pictures>
    </Section>
  </Layout>
);

export default Home;
