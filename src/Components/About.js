import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styled from 'styled-components'
import Fade from 'react-bootstrap/Fade'


const StyledContainer = styled(Container)`
    height: 100vh;
`

const StyledRow = styled(Row)`
    height: 100vh;
`

const StyledH1 = styled.h1`
    font-size: 5rem;
`

const StyledP = styled.p`
    width : 28rem;
    font-size: large;
`

const StyledImage = styled.img`
    width: 200px;
`

const StyledFade = styled(Fade)`
    transition: opacity 2s linear
`

const About = ({img}) => {


    return (
        <StyledFade in appear timeout={3000}>
            <StyledContainer id="about" fluid="md" className="justify-content-center">
                <StyledRow className="text-center align-items-center ">
                    <Col align="center">
                        <StyledH1>About Me</StyledH1>
                        
                        <StyledP>
                        Hello! My name is Fraser, and I have a passion for programming with JavaScript. 
                        My interest in computers began when I was exploring map editors for my favorite real-time strategy games. 
                        I then pursued a computer science diploma at Camosun College, where I discovered my love for coding. 
                        After completing my WordPress Capstone project for Victoria company Three Trees Technical, 
                        I knew I wanted to pursue a career as a web developer. 
                        </StyledP>
                    </Col>
                </StyledRow >
            </StyledContainer>
        </StyledFade>
    )
}


export default About