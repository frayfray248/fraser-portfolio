import styled from "styled-components"

const colors = {
    "highlight" : "color2",
    "normal"    : "paragraph"
}

const StyledText = styled.p`
    max-width: 500px;
    font-size: 1.4rem;
    text-align: left;
    color: ${props => props.theme[colors[props.type]]}
`

const PortfolioText = ({ children, type}) => <StyledText type={type}>{children}</StyledText>

export default PortfolioText