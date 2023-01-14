import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styled from 'styled-components'
import Fade from 'react-bootstrap/Fade';
import ProfilePicture from '../Components/ProfilePicture'
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

const Landing = ({ img }) => {


    return (
        <StyledFade in appear timeout={3000}>
            <Container>
                <StyledRow className="text-center align-items-center ">
                    <Col align="center">
                        <SectionHeading >FRASER MACALLUM</SectionHeading>
                        <StyledP>
                            I'm a technologies lab assistant and my goal is to become a Full Stack Developer. 
                            I have an Information and Computer Systems diploma from Camosun College and I completed 
                            my Capstone project for Victoria-based company Three Trees Technical.
                        </StyledP>
                        <ProfilePicture img={img} />
                    </Col>
                </StyledRow >
            </Container>
        </StyledFade>
    )
}


export default Landing