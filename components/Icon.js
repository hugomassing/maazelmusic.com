import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialIcon = styled.a`
  cursor: pointer;
  margin: 0 5px;
  height: 32px;
  width: 32px;
  background-color: ${(props) => props.theme.primaryColor};
  border-radius: 50%;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  path {
    fill: ${(props) => props.theme.secondaryColor};
  }
`;

const Icon = (props) => {
  return (
    <SocialIcon target="_blank" rel="noopener noreferrer" href={props.link}>
      <FontAwesomeIcon height="16px" width="16px" icon={props.icon} border />
    </SocialIcon>
  );
};

export default Icon;
