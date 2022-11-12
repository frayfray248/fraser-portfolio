import Col from "react-bootstrap/col"
import styled from 'styled-components'

const StyledImage = styled.img`
    width: 80%;
`

const StyledCol = styled(Col)`
    background: ${props => props.theme.color4};
    border: none;
`

const Project = ({ title, description, img, links }) => (
    <StyledCol className="m-2 p-2">
        <StyledImage src={img}></StyledImage>
        <h2>{title}</h2>
        <p>{description}</p>
        {links.map(link => <a href={link}>{link}</a>)}
    </StyledCol>
)

export default Project