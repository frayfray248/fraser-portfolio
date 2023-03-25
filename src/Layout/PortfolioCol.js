import styled from "styled-components"

// PROPS:
//   mWidth:
//     - prop to set the max-width of a column in pixles
//     - default: fit-content

const PortfolioCol = styled.div`
    display: flex;
    flex-direction: column;
    max-width: ${props => props.mWidth? `${props.mWidth}px` : "fit-content"};
`

export default PortfolioCol