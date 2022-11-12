import Container from 'react-bootstrap/container'
import Row from 'react-bootstrap/row'
import Col from 'react-bootstrap/col'
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
                            Greetings! My name is Fraser and I like to play with JavaScript. My interest in computers came from map editors from my favorite RTS games. 
                            Down the line I took a computer science diploma program at Camosun College and became fascinated by programming. After I completed my WordPress Capstone project 
                            for Victoria company Three Trees Technical, I knew I wanted to become a web developer! 
                        </StyledP>
                    </Col>
                </StyledRow >
            </StyledContainer>
        </StyledFade>
    )
}


export default About