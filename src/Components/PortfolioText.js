import styled from "styled-components"

const colors = {
    "highlight" : "highlight",
    "normal"    : "normalText"
}

const StyledText = styled.p`
    max-width: 500px;
    font-size: ${props => props.size? props.size : "1.4"}rem;
    text-align: left;
    color: ${props => props.theme[colors[props.type]]}
`

const PortfolioText = ({ children, type, size}) => <StyledText type={type}  size={size}>{children}</StyledText>

export default PortfolioText