import styled from 'styled-components'

const StyledUL = styled.ul`
    text-align: left;
`

const StyledP = styled.p`
    color : ${props => props.theme.headerColor};
`

const ExperienceItem = ({position, employer, startDate, endDate, duties}) => {

    if (!endDate) endDate = "current"
    else endDate = endDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })

    startDate = startDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })

    return (
    <div>
        <h2>{position} / {employer}</h2>
        
        <StyledP >{startDate} to {endDate}
        </StyledP >
        <StyledUL>
        {duties.map((duty, id) => <li key={id}>{duty}</li>)}
        </StyledUL>
    </div>
    )
}

export default ExperienceItem