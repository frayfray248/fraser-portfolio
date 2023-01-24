import styled from 'styled-components'
import ProfilePicture from '../Components/ProfilePicture'
import PortfolioContainer from '../Components/PortfolioContainer'


const StyledP = styled.p`
    max-width: 50vh;
`


const Landing = ({ img }) => {


    return (
        <PortfolioContainer sectionId="landing" sectionName="FRASER MACALLUM">
            <StyledP>
                I'm a technologies lab assistant and my goal is to become a Full Stack Developer.
                I have an Information and Computer Systems diploma from Camosun College and I completed
                my Capstone project for Victoria-based company Three Trees Technical.
            </StyledP>
            <ProfilePicture img={img} />
        </PortfolioContainer>
    )
}


export default Landing