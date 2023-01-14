import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import styled from 'styled-components'
import Fade from 'react-bootstrap/Fade'
import Project from '../Components/Project'
import threeTreesPic from '../res/ThreeTreesCalendarProfilePic.png'
import evolutionSimPic from '../res/EvolutionSimProjectPic.png'
import SectionHeading from '../Components/SectionHeading'

const StyledRow = styled(Row)`
    min-height: 100vh;
`

const StyledFade = styled(Fade)`
    transition: opacity 2s linear
`

const Projects = () => {


    return (
        <StyledFade in appear timeout={3000}>
            <Container id="projects">
                <StyledRow className="text-center align-items-center justify-content-center">
                    <SectionHeading>Projects</SectionHeading>
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
            </Container>
        </StyledFade>
    )
}


export default Projects