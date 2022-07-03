import styled from "styled-components";
import { Container } from '../../globalStyle';
import { Link } from "react-router-dom";
import Dota2TeamsBG from '../../assets/dota.jpg';
import PUBGMTeamBG from '../../assets/pubg.jpg';
import MLBBTeamBG from '../../assets/MLBB.jpeg';
import ValorantTeamBG from '../../assets/valorant.jpg';

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
    border-bottom: 5px solid white;

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

    &:hover {
        transform: scale(1.2);
        filter: blur(2px);
    }

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
    opacity: 7;
    position: relative;
    width: 380px;
    height: 550px;

    &:after {
        content: '';
        width: 100%;
        height: 100%;
        background-color: black;
        z-index: 1;
        opacity: 1;
    },

    &:hover {
        transform: scale(1.1);
        filter: blur(2px);
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

    &:after {
        content: '';
        width: 100%;
        height: 100%;
        background-color: black;
        z-index: 1;
        opacity: 1;
    },

    &:hover {
        transform: scale(1.1);
        filter: blur(2px);
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

    &:after {
        content: '';
        width: 100%;
        height: 100%;
        background-color: black;
        z-index: 1;
        opacity: 1;
    },

    &:hover {
        transform: scale(1.1);
        filter: blur(2px);
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

    &:after {
        content: '';
        width: 100%;
        height: 100%;
        background-color: black;
        z-index: 1;
        opacity: 1;
    },

    &:hover {
        transform: scale(1.1);
        filter: blur(2px);
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