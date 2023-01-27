import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Fade from 'react-bootstrap/Fade'
import styled from 'styled-components'
import SectionHeading from './SectionHeading'

const StyledFade = styled(Fade)`
    transition: opacity 2s linear
`

const StyledRow = styled(Row)`
    min-height: 100vh;
`

const NavSpace = styled.div`
    height: 80px;
`

const PortfolioContainer = ({ sectionId, sectionName, children }) => (
    <StyledFade in appear timeout={3000}>
        
        <Container id={sectionId}>
        <NavSpace />
            <StyledRow className="text-center align-items-center ">
                <Col align="center">
                    <SectionHeading>{sectionName}</SectionHeading>
                    { children }
                </Col>
            </StyledRow >
        </Container>
    </StyledFade>

)

export default PortfolioContainer