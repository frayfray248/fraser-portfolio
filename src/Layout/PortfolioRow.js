import styled from "styled-components"

const PortfolioRow = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 40px;
    justify-content: ${props => props.justifyContent};
`

export default PortfolioRow