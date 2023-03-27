import styled from "styled-components"
import Brand from "./Brand"
import { device } from "../device/device";
import { useState } from "react";

const Nav = styled.nav`

    /* default top horizontal navbar */
    display: grid;
    grid-template-columns: auto auto auto auto auto auto auto;

    position: fixed;
    top: 0;
    width: 100%;
    z-index: 10;

    background-image: linear-gradient(${props => props.theme.navGradiant1}, ${props => props.theme.navGradiant2});
    border-bottom: 2px solid ${props => props.theme.border};
    border-left: none;
    animation: navSlideTop 1s forwards;

    /*  Side navbar for large screens */
    @media (min-width: 1600px) {
        /* display */
        display: grid;
        grid-template-columns: auto;

        /* position/dimensions */
        position: fixed;
        right -50vh;
        z-index: 10;
        top: 0;
        height: 100%; 

        background-image: linear-gradient(${props => props.theme.navGradiant1}, ${props => props.theme.navGradiant2});
        width: 20vw;
        animation: navSlideRight 1s forwards;
        border-left: 2px solid ${props => props.theme.border};
        border-bottom: none;
    }

    /*  Collapse navbar for mobile screens */
    @media ${device.max.tablet} {
        grid-template-columns: auto;
        animation: none;
        transform: translateY(${props => props.collapse ? "-100%" : "0%"});
        transition-duration: 1s;
    }


    @keyframes navSlideRight {
        from {
            right: -50vh;
        }
        to {
            right: 0px;
        }
    }

    @keyframes navSlideTop {
        from {
            top: -50px;
        }
        to {
            top: 0px;
        }
    }
`


const NavItem = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;
    min-height: 80px;
    
    text-decoration: none;
    color: white;
    cursor: pointer;
    font-size: 1.4rem;
    background-size: 200% 100%;
    background-position: bottom right;
    transition: all .7s ease-out;
  
    /* pseudo element for expanding underline on mouse over */
    &::after {
        content: ''; 
        position: absolute; 
        top: 0;
        left: 0;
        width: 0;
        height: 100%;
        border-bottom: 3px solid ${props => props.theme.link};
        transition: all .5s ease-out;
    }
  
    &:hover {
        background-position: bottom left;
        color: ${props => props.theme.link};
        &::after {
            width: 100%;
            right: 0;
        }
    }
`

const NavToggle = styled.div`
    display: none;
    position: absolute;
    left: 50%;
    bottom: -50px;
    color: lime;
    cursor: pointer;

    @media ${device.max.tablet} {
        display: block;
    }

    transform : rotate(${props => props.collapse ? "0deg" : "180deg"});
    transition-duration: 1s;

`

const NavBar = () => {

    const [collapse, setCollapse] = useState(true)

    const handleToggle = (e) => setCollapse(!collapse)

    return (
        <Nav collapse={collapse}>
            <NavItem href="/"><Brand /></NavItem>
            <NavItem href="#about" >&lt;About /&gt;</NavItem>
            <NavItem href="#projects" >&lt;Projects /&gt;</NavItem>
            <NavItem href="#skills" >&lt;Skills /&gt;</NavItem>
            <NavItem href="#experience" >&lt;Experience /&gt;</NavItem>
            <NavItem href="#interests" >&lt;Interests /&gt;</NavItem>
            <NavItem href="#contact" >&lt;Contact /&gt;</NavItem>
            <NavToggle onClick={handleToggle} collapse={collapse}>
                <svg
                    xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-chevron-double-down" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                    <path fillRule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                </svg>
            </NavToggle>

        </Nav>
    )
}

export default NavBar
