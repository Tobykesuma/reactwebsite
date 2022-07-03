import styled from "styled-components";
import { Container } from '../../globalStyle';
import { Link } from "react-router-dom";



export const TeamsSection = styled.section`
    text-align: center;
    padding: 4rem 0;
    background-color: #101522;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const TeamsHeading = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;


`;

export const TeamsTitle = styled.h1`
    font-size: 45px;
    color: white;

    @media screen and (max-width: 960px){
        font-size: 24px;
    }
`;

export const TeamsContainer = styled(Container)`
    display: flex;
    padding: 3rem 0;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
`;

export const TeamsRow = styled.div`
    display: flex;
    width: 100%;
    overflow: hidden;
    align-items: flex-start;
    justify-content: center;
    margin: 0px auto;
    align-content: center;
    flex-wrap: wrap;
`;

export const TeamsColumn = styled.div`
    display: flex;
    max-width: 33.33333%;
    padding: 20px;
    justify-content: center;
    flex-direction: column;
    margin-top: 20px;
`;

export const TeamsBox = styled.div`
    display: flex;
    width: 350px;
    height: 550px;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    transition: all .1s ease;
    overflow: hidden;
    object-fit: cover;
    cursor: pointer;
    position: relative;
    

    @media screen and (max-width: 960px){

    }
`;

export const TeamsBoxImg = styled.div`

`;

export const TeamsImgBox = styled.div`

`;

export const TeamsLink = styled(Link)`

`;

export const TeamsImageGame = styled.img.attrs`
    src: 
`