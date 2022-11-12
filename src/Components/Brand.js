import styled from 'styled-components'

const StyledSVG = styled.svg`
    fill: ${props => props.theme.color2};
    stroke: ${props => props.theme.color2};
`


const Brand = () => (
    <StyledSVG height="50" width="50" >
        <circle cx="10%"  cy="90%" r="10%" />
        <line x1="10%" y1="25%" x2="10%" y2="90%" strokeWidth="6%" />
        <circle cx="10%"  cy="25%" r="10%" />
        <line x1="10%" y1="25%" x2="90%" y2="10%" strokeWidth="6%"/>
        <circle cx="90%"  cy="10%" r="10%"/>
        <text x="35%" y="90%" fontSize="200%" >F</text>
    </StyledSVG>
)

export default Brand