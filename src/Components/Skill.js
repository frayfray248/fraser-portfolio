import Col from "react-bootstrap/Col"


const Skills = ({ name, description, icon }) => (
    <Col className="flex-wrap-md-down">
        <h2>{name}</h2>
        <p>{description}</p>
    </Col>
)


export default Skills