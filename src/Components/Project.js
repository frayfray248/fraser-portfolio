import Col from "react-bootstrap/col"
import styled from 'styled-components'
import { ReactComponent as LinkIcon } from '../res/link-45deg.svg'
import { ReactComponent as GitHubIcon } from '../res/github.svg'

const StyledImage = styled.img`
    width: 100%;
    border-radius: 10px;
`

const StyledCol = styled(Col)`
    background: ${props => props.theme.color3};
    border: none;
    border-radius: 10px;
    max-width: 300px;
    transition: all 0.5s;
    height: 500px;
    &:hover {
        background: ${props => props.theme.color4};
    }
`

const StyledLinkIcon = styled(LinkIcon)`
width : 2rem;
height : 2rem;
color : ${props => props.theme.headerColor};
margin : 4px;
transition: all 0.5s;
&:hover {
    color: ${props => props.theme.color2};
}
`

const StyledGitHubIcon = styled(GitHubIcon)`
width : 2rem;
height : 2rem;
color : ${props => props.theme.headerColor};
margin : 4px;
transition: all 0.5s;
&:hover {
    color: ${props => props.theme.color2};
}
`

const Project = ({ title, description, img, projectUrl, repoUrl }) => (
    <StyledCol className="m-2 p-2">
        <StyledImage className="mb-2" src={img}></StyledImage>
        <h2>{title}</h2>
        <p>{description}</p>
        <footer>
            {projectUrl ? <a href={projectUrl}><StyledLinkIcon /></a> : ""}
            {repoUrl ? <a href={repoUrl}><StyledGitHubIcon /></a> : ""}
        </footer>

    </StyledCol>
)

export default Project