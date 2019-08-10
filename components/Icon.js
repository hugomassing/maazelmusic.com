import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SocialIcon = styled.a`
    cursor: pointer;
    margin: 0 5px;
    color: ${props => props.theme.secondaryColor};
`

const Icon = (props) => {
    return (<SocialIcon target="_blank" rel="noopener noreferrer" href={props.link}>
        <FontAwesomeIcon icon={props.icon}/>
    </SocialIcon>)
};

export default Icon;