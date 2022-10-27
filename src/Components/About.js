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
    font-size: x-large;
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
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </StyledP>
                    </Col>
                </StyledRow >
            </StyledContainer>
        </StyledFade>
    )
}


export default About