import PortfolioContainer from "../Components/PortfolioContainer"
import Row from 'react-bootstrap/Row'
import Skill from '../Components/Skill'
import Col from 'react-bootstrap/Col'

const skillsData = [
    {
        iconId: 0,
        name: "Sys Admin",
        description: `
        I have over 18 months of experience as a college technologies lab assistant, during which I honed my skills 
        in Linux system administration and a wide range of other technologies. I have experience troubleshooting computer labs, 
        servers and equipment, as well as implementing a variety of requested technologies such as Maya Backburner, 
        Docker Swarm, a custom-built Node JS video streamer, DHCP, SSL certificates, Node JS LDAP, GitLab, and Traefik. 
        I am also experienced in managing Linux servers and virtual machines via Hyper-V, which is a valuable skill 
        for managing and maintaining a high-functioning computer lab.`,
    },
    {
        iconId: 1,
        name: "Node JS",
        description: `I have an intermediate background in Node.js development and a solid foundation in modern JS practices 
        such as ES6, async/await, and IIFEs from my Information and Computer Systems diploma. I have experience working with 
        popular Node.js frameworks such as Express and React and have a solid understanding of Node.js libraries, 
        including Sequelize (ORM), LDAP JS, Axios, Mongoose, Socket IO, and jsonwebtoken. I have 4 months of professional
         experience as a developer, working on an Express REST API for my Capstone project. Additionally, I have several 
         personal projects involving Node JS and React which have allowed me to further develop my skills and stay current 
         with the latest technologies and libraries. Overall, I am dedicated to learning and continuously improving my 
         Node.js skills and experience.`
    },
    {
        iconId: 2,
        name: "JS/HTML/CSS",
        description: `I have a solid foundation in JavaScript, HTML, and CSS as well as experience in building web 
        applications. My 4 month Capstone project required me to build a Calendar Plugin using jQuery, AJAX and Bootstrap. 
        Additionally, my Information and Computer Systems program included 5 courses specifically dedicated to web development. 
        I am always looking to improve my skills and knowledge in web development with personal projects.
         I am well-versed in creating responsive and visually appealing web pages and have a good understanding 
        of DOM manipulation. I am motivated to continue learning and growing as a web developer.`
    },
    {
        iconId: 3,
        name: "Technical Writing",
        description: `I have a solid background in technical writing. I have experience creating technical documentation, 
        including project charters, user manuals, final reports, and computer lab software instructions. I am skilled in 
        writing clear and concise documentation that is easy to understand for both technical and non-technical audiences. 
        Additionally, my Capstone experience in Agile development has further helped me to develop my technical writing skills.`
    },
    {
        iconId: 4,
        name: "Technology Tutor",
        description: `I have a strong background in tutoring and teaching computer science courses. I have direct experience 
        in tutoring students with lab and course work, having spent 18 months as a college technologies lab assistant. I also tutor
        students via Superprof where I've received positive reviews
        I am able to effectively communicate technical concepts to both technical and non-technical audiences, and have positive feedback
        on helping students achieve their learning outcomes.
          I use a hands-on approach to guide students in solving problems, demonstrating my strong experience as an instructor. 
          Additionally, I have 3 months of experience teaching a computer literacy course, further solidifying my skills as an educator.
           I am a firm believer in the idea of learning by teaching.`,
        links: [
            {
                text : "Superprof Profile",
                URL : "https://www.superprof.ca/post-secondary-technologies-lab-assistant-with-year-diploma-information-technology-tutor-students-with-lab-and-course-work.html"
            }
        ]
        
    }
]


const Skills = () => (
    <PortfolioContainer sectionId="skills" sectionName="Skills" >
        <Row className="text-center justify-content-center d-flex">
            {skillsData.map((skill, index) =>
                <Col key={index} xs={12} md={6} className="d-block d-md-flex">

                    <Skill name={skill.name} description={skill.description} iconId={skill.iconId} links={skill.links}/>
                </Col>
            )}
        </Row>
    </PortfolioContainer>
)

export default Skills