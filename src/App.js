import React from 'react';
import StyledNavbar from './Components/Navbar'
import { createGlobalStyle } from 'styled-components'
import { ThemeProvider } from 'styled-components'
import theme from './Themes/GreenContrast'

// sections
import Landing from './Sections/Landing'
import About from './Sections/About'
import Projects from './Sections/Projects'
import Skills from './Sections/Skills'
import Experience from './Sections/Experience'
import Interests from './Sections/Interests'
import Contact from './Sections/Contact'

import face from './res/labroom.png'

const GlobalStyle = createGlobalStyle`
    html, body {
        height : 100%;
    }

    h1, h2 {
        color: ${props => props.theme.headerColor};
    }

    body {
        background-color: ${props => props.theme.color3};
        color: ${props => props.theme.color2};
        font-family: "Calibre","Inter","San Francisco","SF Pro Text",-apple-system,system-ui,sans-serif;
    }
`

const App = () => (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <StyledNavbar />
        <Landing img={face}/>
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Interests />
        <Contact />
    </ThemeProvider>
)

export default App;
