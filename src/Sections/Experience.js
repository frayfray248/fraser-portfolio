import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styled from 'styled-components'
import Fade from 'react-bootstrap/Fade';
import ExperienceItem from '../Components/ExperienceItem'
import SectionHeading from '../Components/SectionHeading'

const StyledRow = styled(Row)`
    min-height: 100vh;
`
const StyledFade = styled(Fade)`
    transition: opacity 2s linear
`

const Skills = () => {


    return (
        <StyledFade in appear timeout={3000}>
            <Container id="skills">
                <StyledRow className="text-center align-items-center ">
                    <Col align="center">
                        <SectionHeading>Experience</SectionHeading>
                        <ExperienceItem 
                            position={"Lab Assistant, Technologies"}
                            employer={"Camosun College"}
                            startDate={new Date(2021, 3)}
                            duties={[
                                "Help students with basic questions and demonstrate the use of specialized software and equipment/tools",
                                "Assist students in troubleshooting programming complexities and other discipline-specific lab tasks",
                                "Set up computer labs by preparing equipment and software",
                                "Research and implement new technologies for use in lab environments",
                            ]}
                        />
                        <ExperienceItem 
                            position={"Instructor, Part time"}
                            employer={"Camosun College"}
                            startDate={new Date(2022, 3)}
                            endDate={new Date(2022, 5)}
                            duties={[
                                "Taught a 7-week computer literacy course (COMP152)",
                                "Delivered weekly lectures and provided support during lab sessions",
                                "Evaluated student submissions and provided feedback"
                            ]}
                        />
                        <ExperienceItem 
                            position={"Developer, Capstone"}
                            employer={"Three Trees Technical"}
                            startDate={new Date(2020, 5)}
                            endDate={new Date(2020, 7)}
                            duties={[
                                "Worked in an Agile team of three students to develop a WordPress calendar and course manager for non-profit organizations",
                                "Created a fast and asynchronous Node JS Express REST API using ES6 and Sequelize JS ORM",
                                "Wrote detailed technical documentation, including a project charter, team bios, user manual, and final report",
                                "Sponsored by Victoria-based companies Three Trees Technical and Oculus Design",
                            ]}
                        />
                    </Col>
                </StyledRow >
            </Container>
        </StyledFade>
    )
}


export default Skills