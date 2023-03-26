import Button from 'react-bootstrap/Button'
import styled from 'styled-components'

const StyledButton = styled(Button)`
    background : none;
    border: 2px solid ${props => props.theme.button};
    color: ${props => props.theme.button};
    padding: 20px;

    &:hover {
        background-color: ${props => props.theme.button};
        border: 2px solid ${props => props.theme.button};
        color: ${props => props.theme.color3};
    }

    &:active:hover {
        background-color: ${props => props.theme.button};
        border: 2px solid ${props => props.theme.button};
        color: ${props => props.theme.buttonHover};
    }
`

const PortfolioButton = ({ text }) => <StyledButton>{text}</StyledButton>

export default PortfolioButton