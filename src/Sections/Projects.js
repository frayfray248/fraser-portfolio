import Row from 'react-bootstrap/Row'
import Project from '../Components/Project'
import threeTreesPic from '../res/ThreeTreesCalendarProfilePic.png'
import evolutionSimPic from '../res/EvolutionSimProjectPic.png'
import fraserPortfolioProjectPic from '../res/FraserPortfolioProjectPic.png'
import PortfolioContainer from '../Components/PortfolioContainer'
import RealmCraftPortfolioPic from '../res/RealmCraftPortfolioPic.png'
import NeoMerchantPortfolioPic from '../res/NeoMerchantPortfolioPic.png'


const Projects = () => {

    return (
        <PortfolioContainer sectionId="projects" sectionName="Projects">
            <Row className="text-center align-items-center justify-content-center">
                <Project
                    title='Three Trees Calendar'
                    img={threeTreesPic}
                    description='A class/workshop manager WordPress plugin'
                    projectUrl="http://capstone.camosun.ca/archived-capstone/June2020/public/TeamPages/Team%20Three%20Trees.php"
                    mainLink="http://capstone.camosun.ca/archived-capstone/June2020/public/TeamPages/Team%20Three%20Trees.php"
                />
                <Project
                    title='NeoMerchant'
                    img={NeoMerchantPortfolioPic}
                    description='An Ecommerce React web app and Node Express REST API.'
                    mainLink={"https://github.com/frayfray248/neomerchant-app"}
                    links={[
                        {
                            url: "https://github.com/frayfray248/neomerchant-app",
                            iconIndex: 1,
                            text: "APP:"
                        },
                        {
                            url: "https://github.com/frayfray248/neomerchant-api",
                            iconIndex: 1,
                            text: "API:"
                        }
                        
                    ]}
                />
                <Project
                    title='Evolution Sim'
                    img={evolutionSimPic}
                    description='A web app that simulates the natural selection of 2D lifeforms'
                    repoUrl={"https://github.com/frayfray248/evolution-sim"}
                    mainLink="https://github.com/frayfray248/evolution-sim"
                    links={[
                        {
                            url: "https://evolution-sim.fly.dev/",
                            iconIndex: 2,
                        }]}
                />
                <Project
                    title='This Portfolio'
                    img={fraserPortfolioProjectPic}
                    description='A React app that show cases my projects, skills, and experience. Hosted on AWS.'
                    repoUrl={"https://github.com/frayfray248/fraser-portfolio"}
                    mainLink="https://github.com/frayfray248/fraser-portfolio"
                />
                <Project
                    title='RealmCraft RPG'
                    img={RealmCraftPortfolioPic}
                    description='A tile-based fantasy RPG made using Java Swing. This was my first personal project.'
                    repoUrl={"https://github.com/frayfray248/Fantasy-RPG-RealmCraft-Java"}
                    mainLink="https://github.com/frayfray248/Fantasy-RPG-RealmCraft-Java"
                />
            </Row>
        </PortfolioContainer>
    )
}


export default Projects