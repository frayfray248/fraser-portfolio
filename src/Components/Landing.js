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

const StyledP = styled.p`
    width : 28rem;
    font-size: x-large;
`

const StyledFade = styled(Fade)`
    transition: opacity 2s linear
`

const Landing = () => {


    return (
        <StyledFade in appear timeout={3000}>
            <StyledContainer fluid="md" className="justify-content-center">
                <StyledRow className="text-center align-items-center ">
                    <Col align="center">
                        <StyledH1>FRASER MACALLUM</StyledH1>
                        <StyledP>
                            Aspiring web developer and spaghetti enthusiast.
                        </StyledP>
                    </Col>
                </StyledRow >
            </StyledContainer>
        </StyledFade>
    )
}


export default Landing