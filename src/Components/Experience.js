import Container from 'react-bootstrap/container'
import Row from 'react-bootstrap/row'
import Col from 'react-bootstrap/col'
import styled from 'styled-components'
import Fade from 'react-bootstrap/Fade';
import ExperienceItem from './ExperienceItem'

const StyledContainer = styled(Container)`
    height: 100vh;
`

const StyledRow = styled(Row)`
    height: 100vh;
`

const StyledH1 = styled.h1`
    font-size: 5rem;
`

const StyledUl = styled.ul`
    width : 28rem;
    font-size: x-large;
`

const StyledFade = styled(Fade)`
    transition: opacity 2s linear
`

const Skills = () => {


    return (
        <StyledFade in appear timeout={3000}>
            <StyledContainer id="skills" fluid="md" className="justify-content-center">
                <StyledRow className="text-center align-items-center ">
                    <Col align="center">
                        <StyledH1>Experience</StyledH1>
                        <ExperienceItem 
                            position={"Lab Assistant, Technologies"}
                            employer={"Camosun College"}
                            startDate={new Date(2021, 3)}
                            duties={[
                                "Assisted students by answering basic questions and demonstrating the use of commonly used and program-specific specialized software packages and/or equipment/tools",
                                "Assisted students with problem-solving, as applicable, programming complexities and other discipline-specific lab tasks",
                                "Prepared equipment and software for computer labs",
                                "Researched and developed various technologies to be used in the lab environments",
                            ]}
                        />
                        <ExperienceItem 
                            position={"Instructor, Part time"}
                            employer={"Camosun College"}
                            startDate={new Date(2022, 3)}
                            endDate={new Date(2022, 5)}
                            duties={[
                                "Instructed a 7-week a computer literacy course",
                                "Presented weekly lectures and assisted students during labs",
                                "Graded student submissions",
                                "Course Name: COMP152 - Computer Literacy with Programming"
                            ]}
                        />
                        <ExperienceItem 
                            position={"Developer, Capstone"}
                            employer={"Three Trees Technical"}
                            startDate={new Date(2020, 5)}
                            endDate={new Date(2020, 7)}
                            duties={[
                                "Worked in a three-student Agile team that delivered a WordPress calendar and course manager that allowed the scheduling of programs with multiple courses",
                                "Solely developed a fast and asynchronous Node JS Express REST API using ES6 and Sequelize JS ORM",
                                "Wrote clear and effective technical documentation including the project charter, team bios, user manual, and final report",
                                "Project purpose was to meet the demand of non-profit organizations to have access to a simple-to-use system that allows management and scheduling of courses and workshops",
                                "Project sponsors are Victoria-based companies Three Trees Technical and Oculus Design",
                                "Project URL: http://capstone.camosun.ca/archived-capstone/June2020/public/TeamPages/Team%20Three%20Trees.php"
                            ]}
                        />
                    </Col>
                </StyledRow >
            </StyledContainer>
        </StyledFade>
    )
}


export default Skills