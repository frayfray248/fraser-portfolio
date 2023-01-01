import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import styled from 'styled-components'
import Brand from './Brand'
import { useEffect } from 'react'


const StyledNavbar = styled(Navbar)`
    background-color: ${props => props.theme.color3};
    box-shadow: 10px 0px 10px black;
`

const StyledLink = styled(Nav.Link)`
    color: ${props => props.theme.color2};
    &.active {
        color: ${props => props.theme.color2}!important;
    }
    &:hover {
        color: ${props => props.theme.headerColor}!important;
    }
`

const StyledBrand = styled(Navbar.Brand)`
    color: ${props => props.theme.color2};
`


const StyledSVG = styled.svg`
    color: ${props => props.theme.color2};
    transform : rotate(180deg);
    transition: all 0.5s;
`

const StyledToggle = styled(Navbar.Toggle)`
    border : none;
    &:focus {
        box-shadow: none;
    }
`

const StyledNav = styled(Nav)`
    width: 100%;
`

const PortfolioNavBar = () => {

    const onEntering = (e) => {
        document.getElementById('navToggleSVG').style.transform = 'rotate(0deg)'
    }

    const onExiting = (e) => {
        document.getElementById('navToggleSVG').style.transform = 'rotate(180deg)'
    }

    return (
    <StyledNavbar fixed="top" expand="md" >
        <Container>
            <StyledBrand href="/"><Brand /></StyledBrand>
            <StyledToggle  aria-controls="basic-navbar-nav">
                <StyledSVG
                    id="navToggleSVG"
                    xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-chevron-double-down" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                    <path fillRule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                </StyledSVG>
            </StyledToggle>
            <Navbar.Collapse id="basic-navbar-nav" onEntering={onEntering} onExiting={onExiting}>
                <StyledNav className="justify-content-center">
                    <StyledLink href="#about">&lt;About /&gt;</StyledLink>
                    <StyledLink href="#projects">&lt;Projects /&gt;</StyledLink>
                        <StyledLink href="#skills">&lt;Experiance /&gt;</StyledLink>
                    <StyledLink href="#contact">&lt;Contact /&gt;</StyledLink>
                </StyledNav>
            </Navbar.Collapse>
        </Container>
    </StyledNavbar>

)}



export default PortfolioNavBar