import styled from 'styled-components'
import PortfolioLink from '../Components/PortfolioLink'
import PortfolioContainer from '../Components/PortfolioContainer'


const StyledP = styled.p`
max-width: 50vh;
    padding-bottom: 50px;
`

const Contact = () => {


    return (
        <PortfolioContainer sectionId="contact" sectionName="Contact">
            <StyledP>Thanks for reading my portfolio. Feel free to reach out to me if you have any questions.</StyledP>
            <PortfolioLink href="/" text="Reach Out"></PortfolioLink>
        </PortfolioContainer>

    )
}


export default Contact