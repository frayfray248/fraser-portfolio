import Col from "react-bootstrap/Col"
import styled from 'styled-components'
import { ReactComponent as LinkIcon } from '../res/link-45deg.svg'
import { ReactComponent as GitHubIcon } from '../res/github.svg'

const StyledImage = styled.img`

    width: 285px;
    height: 285px;
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

const StyledAnchor = styled.a`
&:link {
    text-decoration: inherit;
    color: inherit;
}
&:visited {
    text-decoration: inherit;
    color: inherit;
}
`

const Project = ({ title, description, img, projectUrl, repoUrl, mainLink }) => (
    <StyledCol className="m-2 p-2">
        <StyledAnchor href={mainLink} target="_blank">
            <StyledImage className="mb-2" src={img}></StyledImage>
            <h2>{title}</h2>
            <p>{description}</p>
            <footer className="align-bottom">
                {projectUrl ? <a href={projectUrl} target="_blank"><StyledLinkIcon /></a> : ""}
                {repoUrl ? <a href={repoUrl} target="_blank"><StyledGitHubIcon /></a> : ""}
            </footer>
        </StyledAnchor>
    </StyledCol>
)

export default Project