import React, { Component } from "react";
import { withSoundCloudAudio } from "react-soundplayer/addons";
import styled from "styled-components";
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";
import Icon from "./Icon";

const Card = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Artwork = styled.div`
  margin: 25px 0px;
  width: ${(props) => (props.big ? "350px" : "250px")};
  height: ${(props) => (props.big ? "350px" : "250px")};
  position: relative;
  background-color: ${(props) => props.theme.primaryColor};
  filter: drop-shadow(0px 4px 15px rgba(0, 0, 0, 0.35));
  &:hover {
    img {
      filter: grayscale(100%) brightness(50%);
    }
    div {
      opacity: 1;
      visibility: visible;
    }
  }

  @media only screen and (max-width: 600px) {
    width: ${(props) => (props.big ? "250px" : "150px")};
    height: ${(props) => (props.big ? "250px" : "150px")};
  }
`;

const Img = styled.img`
  width: ${(props) => (props.big ? "350px" : "250px")};
  transition: filter 0.3s ease-in-out;

  @media only screen and (max-width: 600px) {
    width: ${(props) => (props.big ? "250px" : "150px")};
  }
`;

const Overlay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: transparent;
  top: 0;
  left: 0;
  position: absolute;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
`;

const Infos = styled.div`
  text-align: center;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.big ? "100%" : "340px")};
`;

const ReleaseTitle = styled.span`
  margin: 5px 0;
  font-size: ${(props) => (props.big ? "250%" : "150%")};
  font-weight: bold;
`;

const ReleaseInfos = styled.span`
  position: relative;
  margin: 5px;
  font-size: 70%;
  margin-bottom: 10px;
  margin-top: 20px;
  ::before {
    content: "";
    width: 40px;
    border-top: 1px solid ${(props) => props.theme.primaryColor};
    position: absolute;
    left: 50%;
    top: -10px;
    transform: translateX(-50%);
  }
`;

const ActionButton = styled(Button)`
  margin: 10px 20px;
`;

const PlayerControls = styled.div`
  position: absolute;
  bottom: 50px;
`;

const A = styled.a`
  color: ${(props) => props.theme.primaryColor};
`;

const CustomPlayer = withSoundCloudAudio((props) => {
  const { soundCloudAudio, playing, track } = props;
  const play = () => {
    if (playing) {
      soundCloudAudio.pause();
    } else {
      soundCloudAudio.play();
    }
  };

  if (!track) {
    return <></>;
  }

  return (
    <PlayerControls onClick={() => play()}>
      <Icon icon={playing ? faPause : faPlay} background={false} />
    </PlayerControls>
  );
});

const ReleaseCard = (props) => {
  const { release, big } = props;

  if (!release) return <></>;

  return (
    <Card>
      <Artwork big={big}>
        <Img
          src={release.artworkUrl}
          big={big}
          alt={`${release.title} - ${release.artist}`}
        />
        <Overlay>
          <a href={release.streamUrl} target="_blank" rel="noopener noreferrer">
            <ActionButton>
              {release.presave ? "Pre-save" : "Stream"}
            </ActionButton>
          </a>
          {!release.presave && (
            <CustomPlayer
              resolveUrl={release.audio}
              clientId={"25a6312cd0379dbf2b4d8fce66d4f112"}
            />
          )}
        </Overlay>
      </Artwork>
      <Infos big={big}>
        <A href={release.streamUrl} target="_blank" rel="noopener noreferrer">
          <ReleaseTitle>{release.title}</ReleaseTitle>
        </A>
        <span>{release.artist}</span>
        <ReleaseInfos>
          {release.label} - {release.year}
        </ReleaseInfos>
      </Infos>
    </Card>
  );
};

export default ReleaseCard;
