import styled from "styled-components";

const TitleContainer = styled.h1`
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
`;

const Button = (props) => {
  return <TitleContainer {...props}>{props.children}</TitleContainer>;
};

export default Button;
