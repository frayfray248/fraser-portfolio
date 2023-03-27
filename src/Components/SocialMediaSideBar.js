// libraries
import { useEffect, useState } from "react";
import styled from "styled-components"

// icons
import { StyledLinkedinIcon, StyledGitHubIcon, StyledEmailIcon } from '../Components/PortfolioIcons'

const StyledSideBarContainer = styled.div`
    
    background-color: black;
    padding: 10px;
    border: 2px solid lime;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    
`

const IconAnchor = styled.a`

>:hover {
    color: ${props => props.theme.link};
  }
`

const StyledDiv = styled.div`
    position: fixed;
    left: 50px;
    bottom: 50%;
    transform: translateY(50%);
    animation: slide-in 2s forwards;
    display: block;

    &::after {
        position: fixed;
        top: 100%;
        left: 50%;
        content: "";
        display: block;
        width: 2px;
        height: 50vh;
        background-color: lime;
    }

    @keyframes slide-in {
        from {
          bottom: 0;
        }
        to {
          bottom: 50%;
        }
    }

        @media (max-width: 1600px) {
            display: none;
        }
`




const SocialMediaSideBar = () => {

    const [isVisable, setIsVisable] = useState(false)

    useEffect(() => {
        setIsVisable(true)
    }, [])

    return (
        <StyledDiv className={isVisable ? "is-visable" : ""}>
            <StyledSideBarContainer>
                <IconAnchor href="https://www.linkedin.com/in/fraser-macallum-752b2716b" target="_blank" rel="noreferrer"> <StyledLinkedinIcon /></IconAnchor>
                <IconAnchor href="https://github.com/frayfray248" target="_blank" rel="noreferrer"> <StyledGitHubIcon /></IconAnchor>
                <IconAnchor href="mailto:fmacallum@shaw.ca"><StyledEmailIcon /></IconAnchor>
            </StyledSideBarContainer>
        </StyledDiv>
    )

}

export default SocialMediaSideBar