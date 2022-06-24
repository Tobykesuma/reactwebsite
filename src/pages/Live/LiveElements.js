import styled from "styled-components";

export const LiveVideoSection = styled.section`
    width: 100%;
    text-align: center;
    padding: 4rem 0;
    background-color: #101522;

`;

export const LiveVideoTitle = styled.h1`
    color: white;
    font-size: 45px;
    text-align: center;
    align-items: center;
    
    @media screen and (max-width: 960px){
        font-size: 24px;
    }

`;

export const LiveVideoWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3rem 0;

    @media screen and (max-width: 960px){
        padding: 1rem 0;
    }
`;

export const LiveVideoBox = styled.div`
    height: 1000px;
    width: 74.7%;

    @media screen and (max-width: 960px){
        height: 130px;
        width: 75%;
    }
`;




