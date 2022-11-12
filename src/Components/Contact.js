import Container from 'react-bootstrap/container'
import Row from 'react-bootstrap/row'
import Col from 'react-bootstrap/col'
import styled from 'styled-components'
import Fade from 'react-bootstrap/Fade'
import PortfolioLink from './PortfolioLink'

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
    width : 28rem;
    font-size: large;
    padding-bottom: 50px;
`

const Contact = () => {


    return (
        <StyledFade in appear timeout={3000}>
            <StyledContainer id="contact" fluid="md" className="justify-content-center">
                <StyledRow className="text-center align-items-center ">
                    <Col align="center">
                        <StyledH1>Contact</StyledH1>
                        <StyledP>Thanks for reading my portfolio. Feel free to reach out to me if you have any questions.</StyledP>
                        <PortfolioLink href="/" text="Reach Out"></PortfolioLink>
                    </Col>
                </StyledRow >
            </StyledContainer>
        </StyledFade>
    )
}


export default Contact