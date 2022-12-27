import Container from 'react-bootstrap/container'
import Row from 'react-bootstrap/row'
import styled from 'styled-components'
import Fade from 'react-bootstrap/Fade'
import Project from './Project'
import threeTreesPic from '../res/ThreeTreesCalendarProfilePic.png'
import evolutionSimPic from '../res/EvolutionSimProjectPic.png'


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

const Projects = () => {


    return (
        <StyledFade in appear timeout={3000}>
            <StyledContainer id="projects" fluid="md" className="justify-content-center">
                <StyledRow className="text-center align-items-center justify-content-center">
                    <StyledH1>Projects</StyledH1>
                    <Project
                        title='Three Trees Calendar'
                        img={threeTreesPic}
                        description='A class/workshop manager WordPress plugin'
                        projectUrl="http://capstone.camosun.ca/archived-capstone/June2020/public/TeamPages/Team%20Three%20Trees.php" 
                        />
                        <Project
                        title='Evolution Sim'
                        img={evolutionSimPic}
                        description='A web app that simulates the natural selection of 2D lifeforms'
                        repoUrl={"https://github.com/frayfray248/evolution-sim"}
                        />
                </StyledRow >
            </StyledContainer>
        </StyledFade>
    )
}


export default Projects