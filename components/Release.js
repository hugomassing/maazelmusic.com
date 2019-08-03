import styled from 'styled-components'
import Router from 'next/router'
import config from '../constants/config';
import Button from '../components/Button'

const Card = styled.div`
   visibility: true;
`

const Artwork = styled.div`
   margin: 15px 50px;
   width: 250px;
   height: 250px;
   position: relative;
   background-color: #090909;
   &:hover {
      img {
         filter: grayscale(100%);
      }
      div {
         opacity: 1;
         visibility: visible;
      }
   }
`

const Img = styled.img`
   width: 250px;
   transition: filter .5s ease-in-out;
`

const Overlay = styled.div`
   display: flex;
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
`

const Infos = styled.div`
   text-align: center;
   font-size: 16px;
   display: flex;
   flex-direction: column;
`

const ReleaseTitle = styled.span`
   margin: 5px 0;   
   font-size: 200%;
   font-weight: bold;
`

const ReleaseInfos = styled.span`
   margin: 5px;
   font-size: 70%;
   margin-bottom: 10px;
`  

const ReleaseCard = (props) => {
    const { release } = props; 

    console.log(release);
    if (!release) return (<></>);

   return (<Card >
      <Artwork>
         <Img src={release.artworkUrl} />
         <Overlay>
            <Button onClick={() => Router.push(release.streamUrl)}>
               Stream
            </Button>
         </Overlay>
      </Artwork>
      <Infos>
         <ReleaseTitle>{release.title}</ReleaseTitle>
            <span>{release.artist}</span>
         <ReleaseInfos>{release.label} - {release.year}</ReleaseInfos>
      </Infos>
    </Card>)
};

export default ReleaseCard;