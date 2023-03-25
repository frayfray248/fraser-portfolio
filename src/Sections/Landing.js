//layout
import PortfolioSection from '../Layout/PortfolioSection'
import PortfolioRow from '../Layout/PortfolioRow'
import PortfolioCol from '../Layout/PortfolioCol'

// components
import SectionHeading from '../Components/SectionHeading'
import PortfolioText from '../Components/PortfolioText'
import ProfilePicture from '../Components/ProfilePicture'


// Description:
// The first section users see

const Landing = ({ img }) => {
    return (
        <PortfolioSection>
            <SectionHeading>FRASER MACALLUM</SectionHeading>
            <PortfolioRow>
                <PortfolioCol>
                    <PortfolioText type="highlight">
                        Web development is my hobby, my joy, and my future.
                    </PortfolioText>
                    <PortfolioText type="normal">
                        I'm a technologies lab assistant and my goal is to become a Full Stack Developer.
                    </PortfolioText>
                    <PortfolioText type="normal">
                        I have an Information and Computer Systems diploma from Camosun College, I completed
                        my Capstone project for Victoria-based company Three Trees Technical, and I've made several
                        personal projects.
                    </PortfolioText>
                </PortfolioCol>
                <PortfolioCol>
                    <ProfilePicture img={img} radius={25} />
                </PortfolioCol>
            </PortfolioRow>
        </PortfolioSection>
    )
}


export default Landing