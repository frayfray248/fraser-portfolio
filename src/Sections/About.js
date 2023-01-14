import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styled from 'styled-components'
import Fade from 'react-bootstrap/Fade'
import SectionHeading from '../Components/SectionHeading'


const StyledRow = styled(Row)`
    height: 100vh;
`

const StyledP = styled.p`
    max-width: 50vh;
`

const StyledFade = styled(Fade)`
    transition: opacity 2s linear
`

const About = ({img}) => {


    return (
        <StyledFade in appear timeout={3000}>
            <Container id="about">
                <StyledRow className="text-center align-items-center ">
                    <Col align="center">
                        <SectionHeading>About Me</SectionHeading>
                        
                        <StyledP>
                        Hello! My name is Fraser, and I have a passion for programming with JavaScript. 
                        My interest in computers began when I was exploring map editors for my favorite real-time strategy games. 
                        I pursued a computer science diploma at Camosun College, where I discovered my love for coding. 
                        After completing my WordPress Capstone project for Victoria company Three Trees Technical, 
                        I knew I wanted to pursue a career as a web developer. 
                        
                        </StyledP>
                        <StyledP>
                        I'm also a programming tutor, a dungeon master, and a golfer.
                        </StyledP>
                    </Col>
                </StyledRow >
            </Container>
        </StyledFade>
    )
}


export default About