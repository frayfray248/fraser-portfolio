import styled, { css } from 'styled-components'
import { ReactComponent as LinkIcon } from '../res/link-45deg.svg'
import { ReactComponent as GitHubIcon } from '../res/github.svg'
import { ReactComponent as TerminalIcon } from '../res/terminal.svg'
import { ReactComponent as NodeIcon } from '../res/nodejs-icon.svg'
import { ReactComponent as CodeSlashIcon } from '../res/code-slash.svg'
import { ReactComponent as GearIcon } from '../res/gear.svg'
import { ReactComponent as PenIcon } from '../res/pen.svg'
import { ReactComponent as PeopleIcon } from '../res/people.svg'
import { ReactComponent as LinkedinIcon } from '../res/linkedin.svg'
import { ReactComponent as EmailIcon } from '../res/envelope-at.svg'
import { ReactComponent as PlayBtnIcon} from '../res/playbtn.svg'

const style = css`
width : 2rem;
height : 2rem;
color : ${props => props.theme.headerColor};
margin : 4px;
transition: all 0.5s;
`

export const StyledLinkIcon = styled(LinkIcon)`${style}`
export const StyledGitHubIcon = styled(GitHubIcon)`${style}`
export const StyledTerminalIcon = styled(TerminalIcon)`${style}`
export const StyledCodeSlashIcon = styled(CodeSlashIcon)`${style}`
export const StyledGearIcon = styled(GearIcon)`${style}`
export const StyledNodeIcon = styled(() => (<NodeIcon fill="white" width="32" height="32"/>))`${style}`
export const StyledPenIcon = styled(PenIcon)`${style}`
export const StyledPeopleIcon = styled(PeopleIcon)`${style}`
export const StyledLinkedinIcon = styled(LinkedinIcon)`${style}`
export const StyledEmailIcon = styled(EmailIcon)`${style}`
export const StyledPlayBtnIcon = styled(PlayBtnIcon)`${style}`
