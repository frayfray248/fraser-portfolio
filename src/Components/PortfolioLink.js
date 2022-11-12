import styled from 'styled-components'

const StyledA = styled.a`
    background : none;
    border: 2px solid ${props => props.theme.color2};
    border-radius: 5px;
    color: ${props => props.theme.color2};
    padding: 20px;
    text-decoration: none;
    margin-top: 10px;

    &:hover {
        background-color: ${props => props.theme.color2};
        border: 2px solid ${props => props.theme.color2};
        color: ${props => props.theme.color3};
    }

    &:active:hover {
        background-color: ${props => props.theme.color2};
        border: 2px solid ${props => props.theme.color2};
        color: ${props => props.theme.color3};
    }
`

const PortfolioLink = ({ text, href }) => <StyledA href={href}>{text}</StyledA>

export default PortfolioLink