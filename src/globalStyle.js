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

export const ButtonGold = styled.button`
    border-radius: 4px;
    white-space: nowrap;
    color: white;
    outline: none;
    border: 1px solid #fff;
    cursor: pointer;

`;

export const Button = styled.button`
    border-radius: 4px;
    background: ${({ primary }) => (primary ? '#101522' : '#00488b')};
    white-space: nowrap;
    padding: ${({ big })  => (big ? '12px 64px' : '10px 20px')};
    color: white;
    outline: none;
    border: 1px solid #fff;
    cursor: pointer;
    width: 150px;
    height: 50px;
    text-align: center;
    justify-content: center;
    align-items: center;
    font-size: 18px;

    &:hover {
        transition: all 0.4s ease-out;
        background: #00488b;
        color: gold;
        background-color: ${({ primary }) => (primary ? '#0467FB' : '#4b59f7')};

    }

    @media screen and (max-width: 960px){
        width: 100%;
        padding: 25px 25px;
        height: 0;
        text-align: center;
        justify-self: center;
        display:flex;
    }
`



export default GlobalStyle;
