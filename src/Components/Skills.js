import Container from 'react-bootstrap/container'
import Row from 'react-bootstrap/row'
import Col from 'react-bootstrap/col'
import styled from 'styled-components'
import Fade from 'react-bootstrap/Fade';

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

const Skills = () => {


    return (
        <StyledFade in appear timeout={3000}>
            <StyledContainer id="skills" fluid="md" className="justify-content-center">
                <StyledRow className="text-center align-items-center ">
                    <Col align="center">
                        <StyledH1>Skills</StyledH1>
                        <StyledUl>
                            <li>HTML</li>
                            <li>JavaScript</li>
                            <li>CSS</li>
                            <li>Node JS</li>
                            <li>React</li>
                        </StyledUl>
                    </Col>
                </StyledRow >
            </StyledContainer>
        </StyledFade>
    )
}


export default Skills