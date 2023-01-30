import styled from 'styled-components'

const StyledImage = styled.img`
    max-width: 200px;
    border-radius : 100%;
    filter: grayscale(50%);
    box-shadow: 10px 10px 10px black;
`

const ProfilePicture = ({ img, className }) => (
    <StyledImage src={img} className={className}/>
)

export default ProfilePicture