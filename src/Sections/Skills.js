import PortfolioContainer from "../Components/PortfolioContainer"
import Row from 'react-bootstrap/Row'
import Skill from '../Components/Skill'
import Col from 'react-bootstrap/Col'

const skillsData = [
    {
        iconId: 0,
        name: "Sys Admin",
        description: `Fraser has a solid background in Linux system administration and a variety of other technologies
         as a computer lab assistant in a post-secondary education environment. He has experience troubleshooting 
        computer labs, servers and equipment, as well as implementing a variety of requested technologies 
        such as Maya Backburner, Docker Swarm, a custom-built Node JS video streamer, DHCP, SSL certificates, 
        Node JS LDAP, GitLab, and Traefik. He is also experienced in managing Linux servers and virtual machines 
        via Hyper-V, which is a valuable skill for managing and maintaining a high-functioning computer lab`,
    },
    {
        iconId : 1,
        name: "Node JS",
        description: `Fraser has an intermediate background in Node.js development. He has experience working with 
        popular Node.js frameworks such as Express and React. He has a solid understanding of Node.js libraries, 
        including Sequelize (ORM), LDAP JS, and Axios. He is also experienced in developing and implementing fast 
        and asynchronous Node JS Express REST APIs using ES6. He is always eager to learn and use a new cool Node library.`
    },
    {
        iconId : 2,
        name: "JS/HTML/CSS",
        description: `Fraser has a solid foundation in JavaScript, HTML, and CSS. He has experience in building 
        web applications and has a good understanding of the basics of front-end web development. He is eager to gain 
        more experience and improve his skills in JavaScript, HTML, and CSS. He has an aptitude for learning new 
        technologies and is always looking for ways to improve his skills. He is also experienced in frameworks such 
        as jQuery and Bootstrap, and is capable of creating responsive and visually appealing web pages as well as knowing 
        his way around DOM manipulation. He is motivated 
        to continue learning and growing as a developer in the field of web development.`
    },
    {
        iconId : 3,
        name: "Technical Writing",
        description: `Fraser has a strong background in technical writing. He has experience with creating technical 
        documentation, including project charters, user manuals, final reports, computer lab software instructions. He also has experience with writing 
        clear and concise documentation that is easy to understand for both technical and non-technical audiences. 
        He also has experience in Agile development, which further helped him to develop his technical writing skills.`
    },
    {
        iconId : 4,
        name: "Technology Tutor",
        description: `Fraser has a strong background in tutoring and teaching computer science courses. He has direct 
        experience in tutoring students with lab and course work. He is able to effectively communicate technical 
        concepts to both technical and non-technical audiences and has a proven track record of helping students 
        to meet deadlines, earn high marks, and achieve positive learning outcomes. He is a firm believer in the 
        idea of learning by teaching and uses a hands-on approach to guide students in solving problems, 
        thus demonstrating his strong experience as an instructor.`
    }
]


const Skills = () => (
    <PortfolioContainer sectionId="skills" sectionName="Skills" >
        <Row className="text-center justify-content-center d-flex">
            {skillsData.map((skill, index) => 
                <Col key={index} xs={12} md={6} className="d-block d-md-flex">
                    
                    <Skill  name={skill.name} description={skill.description} iconId={skill.iconId} />
                </Col>
            )}
        </Row>
    </PortfolioContainer>
)

export default Skills