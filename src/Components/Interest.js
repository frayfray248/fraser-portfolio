import { Col } from "react-bootstrap"
import styled from "styled-components"
import ProfilePicture from "./ProfilePicture"

const StyledProfilePicture = styled(ProfilePicture)`
    margin-bottom: 20px;
`

const Interest = ({ title, description, img }) => (
    <div>
        <StyledProfilePicture img={img} />
        <h2>{title}</h2>
        <p>{description}</p>
    </div>
)

export default Interest