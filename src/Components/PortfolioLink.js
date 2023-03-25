import styled from 'styled-components'
import Button from 'react-bootstrap/Button';

const StyledA = styled(Button)`
    background : none;
    border: 2px solid ${props => props.theme.link};
    border-radius: 5px;
    color: ${props => props.theme.link};
    padding: 20px;
    text-decoration: none;

    &:hover {
        background-color: ${props => props.theme.link};
        border: 2px solid ${props => props.theme.link};
        color: ${props => props.theme.buttonHover};
    }

    &:active:hover {
        background-color: ${props => props.theme.link};
        border: 2px solid ${props => props.theme.link};
        color: ${props => props.theme.buttonHover};
    }
`

const PortfolioLink = ({ text, href }) => <StyledA href={href} target="_blank" rel="noreferrer">{text}</StyledA>

export default PortfolioLink