// libraries
import styled from 'styled-components'

// layout
import PortfolioSection from '../Layout/PortfolioSection'

// components
import PortfolioLink from '../Components/PortfolioLink'
import SectionHeading from '../Components/SectionHeading'
import PortfolioText from '../Components/PortfolioText'

// icons
import { StyledLinkedinIcon, StyledGitHubIcon, StyledEmailIcon } from '../Components/PortfolioIcons'


// Description
// A thank you and email contact button


const StyledFlexContainer = styled.div`
background-color: black;
padding: 10px;
border: 2px solid lime;
border-radius: 15px;
display: flex;
flex-direction: row;
gap: 10px;

    @media (min-width: 1600px) {
        display: none;
    }
`

const IconSlot = styled.div`
    padding: 2vh;
`

const IconAnchor = styled.a`

>:hover {
    color: ${props => props.theme.link};
  }
`

const Contact = () => {


    return (
        <PortfolioSection sectionId="contact">
            <SectionHeading>Contact</SectionHeading>
            <PortfolioText>Thanks for reading my portfolio. Feel free to reach out to me if you have any questions.</PortfolioText>
            <PortfolioLink href="mailto:fmacallum@shaw.ca" text="Reach Out" ></PortfolioLink>
            <br />
            <StyledFlexContainer>
                <IconSlot>
                    <IconAnchor href="mailto:fmacallum@shaw.ca"><StyledEmailIcon /></IconAnchor>
                </IconSlot>
                <IconSlot>
                    <IconAnchor href="https://github.com/frayfray248" target="_blank" rel="noreferrer"> <StyledGitHubIcon /></IconAnchor>
                </IconSlot>
                <IconSlot>
                    <IconAnchor href="https://www.linkedin.com/in/fraser-macallum-752b2716b" target="_blank" rel="noreferrer"> <StyledLinkedinIcon /></IconAnchor>
                </IconSlot>
            </StyledFlexContainer>

        </PortfolioSection>

    )
}


export default Contact