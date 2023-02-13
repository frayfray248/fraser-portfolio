import Col from "react-bootstrap/Col"
import styled from "styled-components"
import PortfolioLink from "./PortfolioLink"
import { StyledGearIcon, StyledTerminalIcon, StyledCodeSlashIcon, StyledPenIcon, StyledPeopleIcon } from './PortfolioIcons'

const icons = [
    <StyledTerminalIcon />,
    <StyledGearIcon />,
    <StyledCodeSlashIcon />,
    <StyledPenIcon />,
    <StyledPeopleIcon />
]

const StyledSpan = styled.span`
    padding-left: 1rem;
`



const Skills = ({ name, description, iconId, links }) => {

    // vertical align the icons so they don't appear below the header text
    const StyledIcon = styled(() => icons[iconId])`
        vertical-align: bottom;
    `

    return (
        <Col className="flex-wrap-md-down">
            <h2><StyledIcon /><StyledSpan>{name}</StyledSpan></h2>
            <p>{description}</p>
            {links ? links.map((link, index) => <PortfolioLink key={index} text={link.text} href={link.URL}/>) : ""}
        </Col>
    )
}

export default Skills