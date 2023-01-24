import styled from 'styled-components'
import PortfolioContainer from '../Components/PortfolioContainer'


const StyledP = styled.p`
    max-width: 50vh;
`


const About = () => {


    return (
        <PortfolioContainer sectionId="about" sectionName="About Me">
            <StyledP>
                Hello! My name is Fraser, and I have a passion for programming with JavaScript.
                My interest in computers began when I was exploring map editors for my favorite real-time strategy games.
                I pursued a computer science diploma at Camosun College, where I discovered my love for coding.
                After completing my WordPress Capstone project for Victoria company Three Trees Technical,
                I knew I wanted to pursue a career as a web developer.

            </StyledP>
            <StyledP>
                I'm also a programming tutor, a dungeon master, and a golfer.
            </StyledP>
        </PortfolioContainer>
    )
}


export default About