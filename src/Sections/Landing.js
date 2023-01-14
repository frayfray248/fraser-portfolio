import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styled from 'styled-components'
import Fade from 'react-bootstrap/Fade';
import ProfilePicture from '../Components/ProfilePicture'

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

const StyledFade = styled(Fade)`
    transition: opacity 2s linear
`

const StyledPolygon = styled.polygon`

    stroke:${props => props.theme.color2};
    stroke-width:3;
`

const Landing = ({ img }) => {


    return (
        <StyledFade in appear timeout={3000}>
            <StyledContainer fluid="md" className="justify-content-center">
                <StyledRow className="text-center align-items-center ">
                    <Col align="center">
                        <StyledH1 >FRASER MACALLUM</StyledH1>
                        <StyledP>
                            I'm a technologies lab assistant and my goal is to become a Full Stack Developer. 
                            I have an Information and Computer Systems diploma from Camosun College and I completed 
                            my Capstone project for Victoria-based company Three Trees Technical.
                        </StyledP>
                        <ProfilePicture img={img} />
                    </Col>
                </StyledRow >
            </StyledContainer>
        </StyledFade>
    )
}


export default Landing