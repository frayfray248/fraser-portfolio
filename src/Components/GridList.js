// components
import styled from "styled-components"
import PortfolioText from "./PortfolioText"

const StyledUl = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    list-style: none;
`

const StyledLi = styled.li`
    font-size: 1.4rem;
    color: ${props => props.theme.paragraph};

    &::before {
        content: "▹";
        color: lime;
    }
`

const GridList = ({items}) => (
    <StyledUl>
        {items.map((item, index) => <StyledLi key={index} >{item}</StyledLi>)}
    </StyledUl>
)

export default GridList