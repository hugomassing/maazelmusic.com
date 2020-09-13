import styled from "styled-components";

const ButtonContainer = styled.button`
  display: block;
  cursor: pointer;
  height: 40px;
  padding: 0 20px;
  border-radius: 2px;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  background-color: ${(props) =>
    props.primary ? props.theme.primaryColor : props.theme.primaryColor};
  color: ${(props) =>
    props.primary ? props.theme.secondaryColor : props.theme.secondaryColor};
  text-decoration: none;
`;

const Button = (props) => {
  return <ButtonContainer {...props}>{props.children}</ButtonContainer>;
};

export default Button;
