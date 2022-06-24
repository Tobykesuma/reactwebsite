import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing : border-box;
        margin: 0;
        padding: 0;
        font-family: 'Montserrat', sans-serif;
    }
`;

export const Container = styled.div`
    z-index: 1;
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    padding-left: 50px;
    padding-right: 50px;

    @media screen and (max-width: 960px) {
        padding: 0 50px;
    }
`;

export const Section = styled.section`
    padding: 160px 0;
`;




export default GlobalStyle;
