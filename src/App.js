import React from 'react';
import StyledNavbar from './Components/Navbar'
import { createGlobalStyle } from 'styled-components'
import { ThemeProvider } from 'styled-components'
import theme from './Themes/GreenContrast'

const GlobalStyle = createGlobalStyle`
    html, body {
        height : 100%;
    }

    body {
        background-color: ${props => props.theme.color3};
    }
`

const App = () => (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <StyledNavbar />
    </ThemeProvider>
)

export default App;
