import styled from "styled-components";
import { Container } from "../../globalStyle";
import ValorantBackGroundTop from '../../assets/valorant-bg.jpg';
import Aeror from '../../assets/AEROR.png';
import Arzt from '../../assets/ARZT.png';
import Hazard from '../../assets/HAZARD.png';
import Mexicola from '../../assets/MEXICOLA.png';


export const ValorantSection = styled.section`
    position: relative;

    @media screen and (max-width: 960px){

    }
`;

export const ValorantBackGround = styled.div`
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 1;
    opacity: 0.8;
    background-image: url(${ValorantBackGroundTop});
    height: 350px;
`;

export const ValorantBorder = styled.div`
    box-shadow: 1px 1px 1px 1px black;
`;

export const ValorantTitle = styled.div`
    top: 7%;
    left: 0; right: 0;
    text-align: center;
    align-items: center;
    position: absolute;

    @media screen and (max-width: 960px){

    }
`;

export const ValorantTitleHeading = styled.h1`
    font-size: 45px;
    color: white;

    @media screen (max-width: 960px){

    }
`;

export const ValorantBoxContainer = styled(Container)`
    padding-left: 15px;
    padding-right: 15px;
    margin-right: auto;
    margin-left: auto;
    background-color: #101522;


    ${Container};
`;

export const ValorantList = styled.div`
    display: table;
    margin: 0 auto;
    padding: 2rem 0.1rem 0.1rem 0.1rem;
    vertical-align: top;
    width: 100%;
`;

export const ValorantBox = styled.div`
    display: table;
    gap: 2rem;
    border: 1px solid #e1e1e1;
    align-items: center;
    justify-content: center;
    width: 40%;
    margin-left: 48rem;

    @media screen and (max-width: 960px){

    }
`;

export const ValorantImagePlayers = styled.div`
    display: table-cell;
    vertical-align: middle;
    object-fit: cover;
    padding-right: 50px;
`;

export const ImgAeror = styled.img.attrs({
    src: `${Aeror}`
})`
    width: 200px;
    border-style: none;
    vertical-align: middle;
`;

export const ImgMexicola = styled.img.attrs({
    src: `${Mexicola}`
})`
    width: 200px;
    border-style: none;
    vertical-align: middle;
`;

export const ImgHazard = styled.img.attrs({
    src:`${Hazard}`
})`
    width: 200px;
    border-style: none;
    vertical-align: middle;
`;

export const ImgArzt = styled.img.attrs({
    src:`${Arzt}`
})`
    width: 200px;
    border-style: none;
    vertical-align: middle;
`;

export const ValorantName = styled.div`
    margin-top: 30px;
    padding-left: 20px;
`;

export const ValorantNameTitle = styled.h1`
    font-size: 24px;
    font-weight: 700;
    color: gold; 
    margin-bottom: 10px;
    border-bottom: 2px solid white;
    width: 15%;
`;

export const ValorantBio = styled.p`
    padding-left: 20px;
    font-size: 20px;
    color: white;
    margin-top: 20px;
`;