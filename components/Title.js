import styled from "styled-components";

const TitleContainer = styled.h2`
  font-size: 200%;
  width: 100%;
  text-align: center;
  position: relative;
  ::before {
    content: "";
    border-bottom: 1px solid ${(props) => props.theme.primaryColor};
    height: 100%;
    width: 33%;
    left: 0;
    position: absolute;
    transform: translateY(-50%);
  }
  ::after {
    content: "";
    border-bottom: 1px solid ${(props) => props.theme.primaryColor};
    height: 100%;
    width: 33%;
    right: 0;
    position: absolute;
    transform: translateY(-50%);
  }

  @media only screen and (max-width: 900px) {
    ::before,
    ::after {
      width: 25%;
    }
  }
  @media only screen and (max-width: 600px) {
    ::before,
    ::after {
      width: 20%;
    }
  }
  @media only screen and (max-width: 380px) {
    ::before,
    ::after {
      width: 10%;
    }
  }
`;

export default TitleContainer;
