import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialIcon = styled.a`
  cursor: pointer;
  margin: 0 5px;
  height: 32px;
  width: 32px;
  background-color: ${(props) => props.background && props.theme.primaryColor};
  border-radius: 50%;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  path {
    fill: ${(props) => props.theme.secondaryColor};
  }
`;

const Icon = ({ background = true, link, icon }) => {
  return (
    <SocialIcon
      target="_blank"
      rel="noopener noreferrer"
      href={link}
      background={background}
    >
      <FontAwesomeIcon height="16px" width="16px" icon={icon} border />
    </SocialIcon>
  );
};

export default Icon;
