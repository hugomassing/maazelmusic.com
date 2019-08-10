import styled from 'styled-components'

const ButtonContainer = styled.button`
    display: block;
    cursor: pointer;
    height: 40px;
    margin: 20px 10px;
    padding: 0 20px;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    background-color: ${props => props.primary ? props.theme.primaryColor : props.theme.secondaryColor };
    color: ${props => props.primary ? props.theme.secondaryColor : props.theme.primaryColor };
    text-decoration: none;
`

const Button = (props) => {
  return (<ButtonContainer {...props} >
        {props.children}
    </ButtonContainer>)
};

export default Button;