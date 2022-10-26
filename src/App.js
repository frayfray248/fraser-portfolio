import React from 'react';
import StyledNavbar from './Components/Navbar'
import { createGlobalStyle } from 'styled-components'
import { ThemeProvider } from 'styled-components'
import theme from './Themes/GreenContrast'
import Landing from './Components/Landing'

const GlobalStyle = createGlobalStyle`
    html, body {
        height : 100%;
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
        <Landing />
    </ThemeProvider>
)

export default App;
