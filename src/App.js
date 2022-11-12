import React from 'react';
import StyledNavbar from './Components/Navbar'
import { createGlobalStyle } from 'styled-components'
import { ThemeProvider } from 'styled-components'
import theme from './Themes/GreenContrast'
import Landing from './Components/Landing'
import About from './Components/About'
import Projects from './Components/Projects'
import Skills from './Components/Skills'
import Contact from './Components/Contact'

import face from './res/labroom.jpeg'

const GlobalStyle = createGlobalStyle`
    html, body {
        height : 100%;
    }

    h1 {
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
        <Contact />
    </ThemeProvider>
)

export default App;
