// libraries
import React from 'react';
import { createGlobalStyle } from 'styled-components'
import { ThemeProvider } from 'styled-components'

// theme
import theme from './Themes/GreenContrast'

// layout
import PortfolioMain from './Layout/PortfolioMain'

// sections
import Landing from './Sections/Landing'
import About from './Sections/About'
import Projects from './Sections/Projects'
import Skills from './Sections/Skills'
import Experience from './Sections/Experience'
import Interests from './Sections/Interests'
import Contact from './Sections/Contact'

// components
import StyledNavbar from './Components/Navbar'
import SocialMediaSideBar from './Components/SocialMediaSideBar';
import face from './res/labroom.png'
import Arrow from './Components/Arrow';

const GlobalStyle = createGlobalStyle`
    html, body {
        height : 100%;
    }

    h1, h2 {
        color: ${props => props.theme.header};
    }

    body {
        background-image: radial-gradient(${props => props.theme.bgGradiant1}, ${props => props.theme.bgGradiant2});
        background-repeat: no-repeat;
        background-attachment: fixed;
        color: ${props => props.theme.normalText};
        font-family: "Calibre","Inter","San Francisco","SF Pro Text",-apple-system,system-ui,sans-serif;
    }
`

const App = () => (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <StyledNavbar />
        <SocialMediaSideBar />
        <Arrow />

        {/* main container */}
        <PortfolioMain>

            {/* sections */}
            <Landing img={face} />
            <About />
            <Projects />
            <Skills />
            <Experience />
            <Interests />
            <Contact />

        </PortfolioMain>
    </ThemeProvider>
)

export default App;
