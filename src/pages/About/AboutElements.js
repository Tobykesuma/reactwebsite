import styled from "styled-components";
import { Link } from "react-router-dom";
import AboutImage from '../../assets/AboutBG.jpg';


export const AboutSection = styled.section`
    display: flex;
    padding: 4rem 0;

    @media screen and (max-width: 960px){
        text-align: center;
    }

`;


export const AboutTitle = styled.h1`
    font-size: 45px;
    color: black;

    @media screen and (max-width: 960px){
        font-size: 24px;
    }
`;

export const AboutLeft = styled.div`
    display: flex;
    align-items: center;
`;

export const AboutCardBackGround = styled.div`
    
    @media screen (max-width: 960px){
        display: block;

    }
`;

export const AboutCard = styled.div`
    height: 80vh;
    border-radius: 30px;
    position: relative;
    overflow: hidden;
    padding: 4rem 4rem 4rem 4rem;

    @media screen and (max-width: 960px){
        padding: 0;
        display: none;
    }
`;

export const AboutRight = styled.div`
    flex: 1;
    margin-top: 20rem;

    @media screen and (max-width: 960px) {
        margin-top: 0;
    }

`;

export const AboutSub = styled.p`
    margin: 20px 0px;
    font-size: 24px;
    font-weight: 400;

    @media screen and (max-width: 960px){
        font-size: 13px;
        justify-content: center;
        text-align: center;
        align-items: center;
        margin: 25px 25px 25px 25px;
        display: flex;
        font-weight: 300;
    }
`;

export const AboutBottomSection = styled.div`
    padding: 20px 0px;

    @media screen and (max-width: 960px){
        padding: 1rem 0;;
    }
`;

export const AboutBottom = styled.button`
    text-transform: capitalize;
    width: 420px;
    font-size: 30px;
    transition: .4s ease;
    border-radius: 20px;
    background-color: #101522;
    color: white;
    border: 40px solid black ;
    cursor: pointer;    


    &:hover {
        color: gold;
    }

    @media screen and (max-width: 960px){
        font-size: 18px;
        transition: .4s ease;
        border: 40px;
        width: 250px;
        height: 50px;
    }
`;

export const AboutBottomLink = styled(Link)`
    text-decoration: none !important;
    cursor: pointer;
`;

export const AboutIMG = styled.img.attrs({
    src: `${AboutImage}`
})`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 30px;
`;











    

