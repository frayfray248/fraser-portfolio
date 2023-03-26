import styled from "styled-components"

const StyledSVG = styled.div`
    position: fixed;
    top: 85%;
    left: 50%;
    transform: translateX(-50%);
    color: ${props => props.theme.link};
    stroke-width: 0.5;
    transition: transform 1s ease;
    z-index: 1;

    &:hover {
        transform: translate(-50%, -20%);
    }

`

const Arrow = () => {

    return (
        <StyledSVG>
            <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" fill="currentColor" class="bi bi-chevron-double-down" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.165.5 0 0 1 0-.708z" />
                <path fill-rule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                <path fill-rule="evenodd" d="M1.646 10.646a.5.5 0 0 1 .708 0L8 16.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
            </svg>
        </StyledSVG>
    )
}

export default Arrow
