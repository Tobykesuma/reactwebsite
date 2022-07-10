import styled from "styled-components";
import { Container } from '../../globalStyle';
import { Link } from "react-router-dom";
import Dota2TeamsBG from '../../assets/dota.jpg';
import PUBGMTeamBG from '../../assets/pubg.jpg';
import MLBBTeamBG from '../../assets/MLBB.jpeg';
import ValorantTeamBG from '../../assets/valorant.jpg';
import TeamNavBackGrounds from '../../assets/background_about.jpg';




export const TeamsSection = styled.section`
    text-align: center;
    padding: 4rem 0;
    background-color: #101522;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 960px){
        padding: 2rem 0;
    }
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
    border-bottom: 5px solid white;

    @media screen and (max-width: 960px){
        font-size: 24px;
        border-bottom: 1px solid white;
    }
`;

export const TeamsContainer = styled(Container)`
    display: flex;
    padding: 3rem 0;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;

    @media screen and (max-width: 960px){
        padding: 0;
    }

    ${Container}

    
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

    @media screen and (max-width: 768px){
        max-width: 50%;
    }

    @media screen and (max-width: 480px){
        max-width: 100%;
        margin-top: 0;
        padding: 20px;
    }
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
    position: relative;

    &:hover  {
        transform: scale(1.1);
    }

    @media screen and (max-width: 960px){
        width: 300px;
        height: 400px;
        transition: all .2s ease-in-out;

        &:hover {
            transfrom: scale(1.1);
        }
    }
`;

export const TeamsBoxImg = styled.div`
    position: relative;
`;

export const TeamsImgBox = styled.div`
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    overflow: hidden;

    @media screen and (max-width: 960px){

    }
`;  

export const TeamsLink = styled(Link)`
    text-decoration: none;
    font-size: 24px;
    color: white;
    text-align: center;
    align-items: center;
    justify-content: center;

    &:hover {
        color: gold;
    }

    @media screen and (max-width: 960px){
        font-size: 12px;
    }
`;

export const TeamsImageGameDota = styled.img.attrs({
    src: `${Dota2TeamsBG}`
})`
    border-radius: 10px;
    object-fit: cover;
    transition: .4s;
    opacity: 1;
    position: relative;
    width: 380px;
    height: 550px;

    &:before {
        content: '';
        width: 100%;
        height: 100%;
        background-color: black;
        z-index: 1;
        opacity: 1;
        filter: blur(2px);
    },

    &:hover {
        transform: scale(1.1);
    }
`;


export const TeamsImageGameMLBB = styled.img.attrs({
    src: `${MLBBTeamBG}`
})`
    border-radius: 10px;
    object-fit: cover;
    transition: .4s;
    opacity: 7;
    position: relative;
    width: 380px;
    height: 550px;

    &:before {
        content: '';
        width: 100%;
        height: 100%;
        background-color: black;
        z-index: 1;
        opacity: 1;
    },

    &:hover {
        transform: scale(1.1);
    }
`;

export const TeamsImageGamePUBGM = styled.img.attrs({
    src: `${PUBGMTeamBG}`
})`
    border-radius: 10px;
    object-fit: cover;
    transition: .4s;
    opacity: 7;
    position: relative;
    width: 380px;
    height: 550px;

    &:before {
        content: '';
        width: 100%;
        height: 100%;
        background-color: black;
        z-index: 1;
        opacity: 1;
    },

    &:hover {
        transform: scale(1.1);
    }
`;

export const TeamsImageGameValorant = styled.img.attrs({
    src: `${ValorantTeamBG}`
})`
    border-radius: 10px;
    object-fit: cover;
    transition: .4s;
    opacity: 7;
    position: relative;
    width: 380px;
    height: 550px;

    &:before {
        content: '';
        width: 100%;
        height: 100%;
        background-color: black;
        z-index: 1;
        opacity: 1;
    },

    &:hover {
        transform: scale(1.1);
    }
`;

export const TeamsEfect = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0; left: 0;
    background-color: black;
    border-radius: 10px;
    transition: .4s;
    opacity: .1;
    display: none;

    &:hover {
        display: inline;
        transform: scale(1.1);
    }
`;

export const TeamsMeta = styled.div`
    position: absolute;
    top: 0%;
    left: 0%;
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    border-radius: 10px;
    width: 100%;

`;

export const TeamsLinkLink = styled(Link)`
    text-decoration: none;
    font-size: 24px;
    color: white;
    text-align: center;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover {
        color: gold;
    }

    @media screen and (max-width: 960px){
        font-size: 24px;
    }
`;

export const TeamsNameGame = styled.h1`
    font-size: 30px;
    font-weight: 700;
    line-height: 3rem;
    position: relative;
    color: white;
    -webkit-text-stroke-width: 0.5px;
    -webkit-text-stroke-color: black;
    z-index: 1;
    display: inline;

    &:before,
    &:after {
        content: '';
        position: absolute;
        height: 2px;
        width: 0;
        background: white;
        transition: width .3s ease-out .2s;
    }

    &:hover {
        color: gold;
        display: inline;
    }

    @media screen and (max-width: 960px){
        font-size: 25px;
    }

`;


// Styled Elements Team NAV //

export const TeamNavSection = styled.section`
    position: relative;
    display: flex;


    @media screen and (max-width: 960px){
        text-align: center;
    }
`;

export const TeamNavContainer = styled(Container)`
    padding-left: 0px;
    padding-right: 0px;
    margin-right: auto;
    margin-left: auto;
    // background-color: #101522;   

    ${Container}
`;

export const TeamNavBackGround = styled.div`
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 1;
    opacity: 0.5;
    background-image: url(${TeamNavBackGrounds});
    border-bottom: 5px solid white;
    height: 350px; 
     

    @media screen and (max-width: 960px){
        height: 150px;
    }
`;

export const TeamNavWrapper = styled.div`
    display: flex;
`;

export const TeamNavSub = styled.p`
    position: absolute;
    top: 12%;
    left: 0;
    right: 0;
    text-align: center;
    letter-spacing: 1px;
    align-items: center;
    color: black;
    font-size: 20px;
    font-weight: 600;
    justify-content: center;
    padding-left: 800px;
    padding-right: 800px;
    color: black;

    @media screen and (max-width: 960px){
        padding-left: 25px;
        padding-right: 25px;
        top: 2%;
        font-size: 8px;
        font-weight: 400;
    }
`;

export const TeamNavTitle = styled.h1`
    color: black;
    position: absolute;
    top: 25%;
    left: 0;
    right: 0;
    text-align: center;
    letter-spacing: 1px;
    align-items: center;
    color: black;
    font-size: 25px;
    font-weight: 700;
    justify-content: center;
    padding-left: 800px;
    padding-right: 800px;

    @media screen and (max-width: 960px){
        padding-left: 25px;
        padding-right: 25px;
        top: 6%;
        font-size: 15px;
        font-weight: 600;
    }
`;

export const TeamNavContainer2 = styled(Container)`
    padding-left: 495px;
    padding-right: 495px;
    margin-right: auto;
    margin-left: auto;
    background-color: #101522;
    display: flex;
    padding-bottom: 100px;

    @media screen and (max-width: 960px){
        padding-left: 25px;
        padding-right: 15px;
        display: block;
    }


    ${Container}
`;

export const TeamNavColumns = styled.div`
    display: flex;
    max-width: 33.33333%;
    padding: 20px;
    justify-content: center;
    flex-direction: column;
    margin-top: 5rem;
    @media screen and (max-width: 768px){
        max-width: 50%;
    }

    @media screen and (max-width: 480px){
        max-width: 100%;
        margin-top: 0;
        padding: 20px;
    }
`;