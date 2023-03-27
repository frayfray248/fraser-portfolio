import styled from "styled-components"
import { device } from '../device/device'


const StyledMain = styled.main`
    width: 100%;
    min-height: 100vh;
    padding: 0px 150px;
    box-sizing: border-box;
    margin: 0 auto;

    @media ${device.min.mobileS} {
        padding: 0px 25px;
    }

    @media ${device.min.tablet} {
        padding: 0px 50px;
    }

`

const PortfolioMain = ({ children }) => <StyledMain>{children}</StyledMain>

export default PortfolioMain