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
  width: ${(props) => (props.big ? "350px" : "250px")};
  height: ${(props) => (props.big ? "350px" : "250px")};
  position: relative;
  background-color: ${(props) => props.theme.primaryColor};
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
  width: ${(props) => (props.big ? "350px" : "250px")};
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
  width: ${(props) => (props.big ? "440px" : "340px")};
`;

const ReleaseTitle = styled.span`
  margin: 5px 0;
  font-size: 150%;
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
      <Icon icon={playing ? faPause : faPlay} />
    </PlayerControls>
  );
});

const ReleaseCard = (props) => {
  const { release, big } = props;

  if (!release) return <></>;

  return (
    <Card>
      <Artwork big={big}>
        <Img src={release.artworkUrl} big={big} />
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
      <Infos big={big}>
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
