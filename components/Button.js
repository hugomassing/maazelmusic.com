import styled from 'styled-components'

const ButtonContainer = styled.button `
    display: block;
    cursor: pointer;
    height: 40px;
    margin: 20px 10px;
    padding: 0 20px;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    background-color: ${props => props.primary ? '#090909' : 'white'};
    color: ${props => props.primary ? 'white' : '#090909'};
`

const Button = (props) => {
  return (<ButtonContainer {...props} >
        {props.children}
    </ButtonContainer>)
};

export default Button;