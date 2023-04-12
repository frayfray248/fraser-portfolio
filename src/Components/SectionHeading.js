import styled from 'styled-components'


const StyledH1 = styled.h1`

    text-align: center;

    @media (max-width: 768px) {
        font-size: 13vw;
    }

    @media (min-width: 768px) {
        font-size: 8vh;
    }
    
`

const SectionHeading = ({ children }) => (
    <StyledH1>{children}</StyledH1>
)

export default SectionHeading