import Row from 'react-bootstrap/Row'
import Project from '../Components/Project'
import threeTreesPic from '../res/ThreeTreesCalendarProfilePic.png'
import evolutionSimPic from '../res/EvolutionSimProjectPic.png'
import PortfolioContainer from '../Components/PortfolioContainer'


const Projects = () => {

    return (
        <PortfolioContainer sectionId="projects" sectionName="Projects">
            <Row className="text-center align-items-center justify-content-center">
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
            </Row>
        </PortfolioContainer>
    )
}


export default Projects