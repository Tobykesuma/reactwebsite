import styled from "styled-components";
import { Container } from "../../globalStyle";
import MobileLegendBackGroundTop from '../../assets/MLBB.jpeg';
import Azraa from '../../assets/Image/AZRAA.png';
import Niccc from '../../assets/Image/niccc.png';
import Reyzo from '../../assets/Image/Reyzo.png';
import Winnie from '../../assets/Image/WINNIE.png';
import Zyro from '../../assets/Image/zyro.png';


export const MobileLegendSection = styled.section`
    position: relative;

    @media screen and (max-width: 960px){

    }
`;

export const MobileLegendBackGround = styled.div`
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 1;
    opacity: 0.8;
    background-image: url(${MobileLegendBackGroundTop});
    height: 350px;
`;

export const MobileLegendBorder = styled.div`
    box-shadow: 1px 1px 1px 1px black;
`;


export const MobileLegendTitle = styled.div`
    top: 6%;
    left: 0; right: 0;
    text-align: center;
    align-items: center;
    position: absolute;

    @media screen and (max-width: 960px){

    }
`;

export const MobileLegendTitleHeading =  styled.h1`
    font-size: 45px;
    color: white;

    @media screen (max-width: 960px){

    }
`;

export const MobileLegendBoxContainer = styled(Container)`
    padding-left: 15px;
    padding-right: 15px;
    margin-right: auto;
    margin-left: auto;
    background-color: #101522;


    ${Container};
`;

export const MobileLegendList = styled.div`
    display: table;
    margin: 0 auto;
    padding: 2rem 0.1rem 0.1rem 0.1rem;
    vertical-align: top;
    width: 100%;
`;

export const MobileLegendBox = styled.div`
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

export const MLBBImagePlayers = styled.div`
    display: table-cell;
    vertical-align: middle;
    object-fit: cover;
    padding-right: 50px;
`;

export const ImgAzraa = styled.img.attrs({
    src:`${Azraa}`
})`
    width: 200px;
    border-style: none;
    vertical-align: middle;
`;

export const ImgNicc = styled.img.attrs({
    src:`${Niccc}`
})`
    width: 200px;
    border-style: none;
    vertical-align: middle;
`;

export const ImgReyzo = styled.img.attrs({
    src:`${Reyzo}`
})`
    width: 200px;
    border-style: none;
    vertical-align: middle;
`;

export const ImgWinnie = styled.img.attrs({
    src:`${Winnie}`
})`
    width: 200px;
    border-style: none;
    vertical-align: middle;
`;

export const ImgZyro = styled.img.attrs({
    src:`${Zyro}`
})`
    width: 200px;
    border-style: none;
    vertical-align: middle;
`;

export const MLBBName = styled.div`
    margin-top: 30px;
    padding-left: 20px;
`;

export const MLBBNameTitle = styled.h1`
    font-size: 24px;
    font-weight: 700;
    color: gold; 
    margin-bottom: 10px;
    border-bottom: 2px solid white;
    width: 15%;
`;

export const MLBBBio = styled.p`
    padding-left: 20px;
    font-size: 20px;
    color: white;
    margin-top: 20px;
`;