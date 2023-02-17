import Col from "react-bootstrap/Col"
import styled from 'styled-components'
import { StyledGitHubIcon, StyledLinkIcon, StyledPlayBtnIcon } from './PortfolioIcons'
import React from "react"

const icons = [
    <StyledLinkIcon hover="true" />,
    <StyledGitHubIcon hover="true" />,
    <StyledPlayBtnIcon hover="true" />
]

const StyledImage = styled.img`

    width: 285px;
    height: 285px;
    border-radius: 10px;
`

const StyledCol = styled(Col)`
    background: none;
    border: none;
    border-radius: 10px;
    max-width: 300px;
    transition: all 0.5s;
    height: 500px;
    &:hover {
        background: ${props => props.theme.color4};
    }
`

const StyledImageAnchor = styled.a`
&:link {
    text-decoration: inherit;
    color: inherit;
}
&:visited {
    text-decoration: inherit;
    color: inherit;
}
`

const IconAnchor = styled.a`

>:hover {
    color: ${props => props.theme.color2};
  }
`

const Project = ({ title, description, img, projectUrl, repoUrl, mainLink, links }) => (
    <StyledCol className="m-2 p-2">
        <StyledImageAnchor href={mainLink} target="_blank">
            <StyledImage className="mb-2" src={img}></StyledImage>
        </StyledImageAnchor>
        <h2>{title}</h2>
        <p>{description}</p>
        <footer className="align-bottom">
            {
                links ?
                    links.map((link, index) => <React.Fragment key={index} >&nbsp;{link.text}&nbsp;<IconAnchor  href={link.url} target="_blank" rel="noreferrer">{icons[link.iconIndex]}</IconAnchor></React.Fragment>)
                    :
                    ""
            }
            {projectUrl ? <IconAnchor href={projectUrl} target="_blank" rel="noreferrer"><StyledLinkIcon hover="true" /></IconAnchor> : ""}
            {repoUrl ? <IconAnchor href={repoUrl} target="_blank" rel="noreferrer"><StyledGitHubIcon hover="true" /></IconAnchor> : ""}
        </footer>

    </StyledCol>
)

export default Project