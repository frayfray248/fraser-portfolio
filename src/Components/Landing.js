import Container from 'react-bootstrap/container'
import Row from 'react-bootstrap/row'
import Col from 'react-bootstrap/col'
import styled from 'styled-components'
import Fade from 'react-bootstrap/Fade';
import ProfilePicture from './ProfilePicture'

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
                            I'm an aspiring web developer seeking the title of Full Stack Developer. I have an ICS diploma from Camosun College and I completed my Capstone project for Victoria based company Three Trees Technical.
                        </StyledP>
                        <ProfilePicture img={img} />
                    </Col>
                </StyledRow >
            </StyledContainer>
        </StyledFade>
    )
}


export default Landing