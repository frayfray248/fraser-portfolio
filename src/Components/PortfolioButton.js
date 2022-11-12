import Button from 'react-bootstrap/Button'
import styled from 'styled-components'

const StyledButton = styled(Button)`
    background : none;
    border: 2px solid ${props => props.theme.color2};
    color: ${props => props.theme.color2};
    padding: 20px;

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

const PortfolioButton = ({ text }) => <StyledButton>{text}</StyledButton>

export default PortfolioButton