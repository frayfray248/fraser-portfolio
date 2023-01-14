import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styled from 'styled-components'
import Fade from 'react-bootstrap/Fade'
import PortfolioLink from '../Components/PortfolioLink'
import SectionHeading from '../Components/SectionHeading'

const StyledContainer = styled(Container)`
    height: 100vh;
`

const StyledRow = styled(Row)`
    height: 100vh;
`

const StyledH1 = styled.h1`
    font-size: 5rem;
`

const StyledUl = styled.ul`
    width : 28rem;
    font-size: x-large;
`

const StyledFade = styled(Fade)`
    transition: opacity 2s linear
`

const StyledP = styled.p`
max-width: 50vh;
    padding-bottom: 50px;
`

const Contact = () => {


    return (
        <StyledFade in appear timeout={3000}>
            <Container id="contact">
                <StyledRow className="text-center align-items-center ">
                    <Col align="center">
                        <SectionHeading>Contact</SectionHeading>
                        <StyledP>Thanks for reading my portfolio. Feel free to reach out to me if you have any questions.</StyledP>
                        <PortfolioLink href="/" text="Reach Out"></PortfolioLink>
                    </Col>
                </StyledRow >
            </Container>
        </StyledFade>
    )
}


export default Contact