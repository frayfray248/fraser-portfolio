import styled from 'styled-components'

const StyledImage = styled.img`
    max-width: 300px;
    border-radius : ${props => props.radius}%;
    filter: grayscale(75%);
    box-shadow: 10px 10px 10px black;
    transition: all 0.5s;
    &:hover {
        filter: grayscale(0%);
    }
`

const ProfilePicture = ({ img, className, radius=100 }) => (
    <StyledImage src={img} className={className} radius={radius}/>
)

export default ProfilePicture