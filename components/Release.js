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
  margin: 15px 50px;
  width: 250px;
  height: 250px;
  position: relative;
  background-color: ${props => props.theme.primaryColor};
  &:hover {
    img {
      filter: grayscale(100%) brightness(50%);
    }
    div {
      opacity: 1;
      visibility: visible;
    }
  }
`;

const Img = styled.img`
  width: 250px;
  transition: filter 0.5s ease-in-out;
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
  transition: opacity 0.5s ease-in-out;
`;

const Infos = styled.div`
  text-align: center;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  width: 340px;
`;

const ReleaseTitle = styled.span`
  margin: 5px 0;
  font-size: 200%;
  font-weight: bold;
`;

const ReleaseInfos = styled.span`
  margin: 5px;
  font-size: 70%;
  margin-bottom: 10px;
`;

const ActionButton = styled(Button)`
  margin: 10px 20px;
`;

const PlayerControls = styled.div`
  position: absolute;
  bottom: 50px;
`;

const CustomPlayer = withSoundCloudAudio(props => {
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
      <Icon icon={playing ? faPause : faPlay} />
    </PlayerControls>
  );
});

const ReleaseCard = props => {
  const { release } = props;

  if (!release) return <></>;

  return (
    <Card>
      <Artwork>
        <Img src={release.artworkUrl} />
        <Overlay>
          <a href={release.streamUrl} target="_blank" rel="noopener noreferrer">
            <ActionButton>Stream</ActionButton>
          </a>
          <CustomPlayer
            resolveUrl={release.audio}
            clientId={"25a6312cd0379dbf2b4d8fce66d4f112"}
          />
        </Overlay>
      </Artwork>
      <Infos>
        <ReleaseTitle>{release.title}</ReleaseTitle>
        <span>{release.artist}</span>
        <ReleaseInfos>
          {release.label} - {release.year}
        </ReleaseInfos>
      </Infos>
    </Card>
  );
};

export default ReleaseCard;
