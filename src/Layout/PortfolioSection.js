import Fade from "react-bootstrap/Fade"

import styled from "styled-components"

const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
    align-items: flex-start;
    margin: 0 auto;
    max-width: 1200px;
    gap: 20px;
`
const StyledFade = styled(Fade)`
    transition: opacity 2s linear
`

const NavSpace = styled.div`
    height: 80px;
`


const PortfolioSection = ({ sectionId, children }) => (
    <StyledFade in appear timeout={3000}>
        
        <StyledSection id={sectionId}><NavSpace />{children}</StyledSection>
    </StyledFade>
    
)

export default PortfolioSection