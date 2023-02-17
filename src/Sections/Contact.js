import styled from 'styled-components'
import PortfolioLink from '../Components/PortfolioLink'
import PortfolioContainer from '../Components/PortfolioContainer'
import { StyledLinkedinIcon, StyledGitHubIcon, StyledEmailIcon } from '../Components/PortfolioIcons'


const StyledP = styled.p`
    max-width: 50vh;
    padding-bottom: 20px;
`

const StyledInlineFlexContainer = styled.div`
    background-color: ${props => props.theme.color6};
    padding : 10px;
    margin-top : 10px;
    border-radius : 15px;
    box-shadow: 0px 0px 5px 5px ${props => props.theme.color6};
`

const IconSlot = styled.div`
    padding: 2vh;
`

const IconAnchor = styled.a`

>:hover {
    color: ${props => props.theme.color2};
  }
`

const Contact = () => {


    return (
        <PortfolioContainer sectionId="contact" sectionName="Contact">

            <StyledP>Thanks for reading my portfolio. Feel free to reach out to me if you have any questions.</StyledP>
            <PortfolioLink href="mailto:fmacallum@shaw.ca" text="Reach Out" ></PortfolioLink>
            <br />
            <StyledInlineFlexContainer className='d-inline-flex m-4'>
                <IconSlot>
                    <IconAnchor  href="mailto:fmacallum@shaw.ca"><StyledEmailIcon /></IconAnchor>
                </IconSlot>
                <IconSlot>
                    <IconAnchor href="https://github.com/frayfray248" target="_blank" rel="noreferrer"> <StyledGitHubIcon /></IconAnchor>
                </IconSlot>
                <IconSlot>
                <IconAnchor href="https://www.linkedin.com/in/fraser-macallum-752b2716b" target="_blank" rel="noreferrer"> <StyledLinkedinIcon /></IconAnchor>
                </IconSlot>
            </StyledInlineFlexContainer>

        </PortfolioContainer>

    )
}


export default Contact