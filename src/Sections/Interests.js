import PortfolioContainer from '../Components/PortfolioContainer'
import Interest from '../Components/Interest'
import golfPic from '../res/golfPic.jpg'
import piePic from '../res/pie.JPG'
import DnDPic from '../res/DnDPic.jpg'
import pcPosePic from '../res/pcPosePic.jpg'
import { Row } from 'react-bootstrap'



const Interests = () => {


    return (
        <PortfolioContainer sectionId="interests" sectionName="Interests">
            <Row>
            <Interest 
            title="Golf" 
            description="I enjoy golf because it's relaxing and allows me to think about my moves. It also reminds me to never give up even if I land in a sandpit." 
            img={golfPic}/>

            <Interest 
            title="Culinary Art" 
            description="After spending many years in the food industry, I have come to appreciate the joy of comfort food and the excitment of trying a new recipe. I can put together a solid sheperd's pie, shrimp scampi, pad thai, and more" 
            img={piePic}/>
            <Interest 
            title="Gaming" 
            description="I have been captivated by video games since my earliest memories playing the original Sims, Age of Empires, 
            and Super Mario World. These games sparked my interest in both custom content tools, such as map editors and scripting, and in computers and programming." 
            img={pcPosePic}/>
            
            <Interest 
            title="Tabletop RPGs" 
            description="I've played Dungeons and Dragons since 3.5 Edition. I've ran several homebrew campaigns as a Dungeon Master. D&D allows me unleash my creativity and provide a thrilling experience for my players." 
            img={DnDPic}/>
            </Row>
        </PortfolioContainer>
    )
}


export default Interests