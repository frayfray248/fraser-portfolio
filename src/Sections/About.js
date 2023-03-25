// layout
import PortfolioSection from '../Layout/PortfolioSection'
import PortfolioRow from '../Layout/PortfolioRow'
import PortfolioCol from '../Layout/PortfolioCol'

// components
import PortfolioText from '../Components/PortfolioText'
import SectionHeading from '../Components/SectionHeading'
import GridList from '../Components/GridList'

// Description:
// A brief description about me

const technologies = [
    "ES6 JavaScript",
    "Node JS",
    "Express JS",
    "React",
    "jQuery",
    "HTML",
    "CSS",
    "Git",
    "Axios",
    "Mongoose",
    "MongoDB",
    "Docker CE",
    "Portainer",
    "Traefik",
    "Bootstrap",
    "Socket IO",
]

const About = () => {
    return (
        <PortfolioSection sectionId="about">
            <SectionHeading>About Me</SectionHeading>
            <PortfolioRow>
                <PortfolioCol>
                    <PortfolioText type="normal">
                        Hello! My name is Fraser, and I enjoy making apps for the internet.
                        My interest in programming started when I explored map editors for my favorite real-time strategy games.
                        I fed this interest when I pursued a computer science diploma at Camosun College in 2018. I discovered My
                        love for codding when I took my first algorithms course. My passion for web development was fully formed
                        when I created a REST Node JS Express API for my WordPress Capstone project. My mission to become a full stack developer began.
                    </PortfolioText>
                    <PortfolioText type="highlight">
                        I'm ready for a challenge. Let's make something awesome.
                    </PortfolioText>
                </PortfolioCol>
                <PortfolioCol >
                    <PortfolioRow>
                        <PortfolioText type="normal">
                            Here are some technologies I've used:
                        </PortfolioText>
                    </PortfolioRow>
                    <PortfolioRow>
                        <PortfolioCol>
                            <GridList items={technologies}/>
                        </PortfolioCol>
                    </PortfolioRow>
                </PortfolioCol>
            </PortfolioRow>
        </PortfolioSection>
    )
}


export default About