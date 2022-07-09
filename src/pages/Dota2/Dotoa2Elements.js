import styled from "styled-components";
import { Container } from "../../globalStyle";
import Dota2BackGroundTop from '../../assets/dota.jpg';
import Dota2Logos from '../../assets/dota2logo.png';
import Havinci from '../../assets/HAVINCI.png';
import Hated from '../../assets/HATED.png';
import Usagi from '../../assets/USAGI.png';
import Ramz from '../../assets/RAMZI.png';
import TBDPhoto from '../../assets/Image/TBD.png';



export const Dota2Section = styled.section`
    position: relative;

    @media screen and (max-width: 960px){
        text-align: center;
    }
`;

export const Dota2BackGround = styled.div`
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 1;
    opacity: 0.8;
    background-image: url(${Dota2BackGroundTop});
    height: 350px;
`;

export const Dota2Border = styled.div`
    box-shadow: 1px 1px 1px 1px black;
`;

export const Dota2Title = styled.div`
    top: 8%;
    left: 0; right: 0;
    text-align: center;
    align-items: center;
    position: absolute;

    @media screen and (max-width: 960px){

    }
`;

export const Dota2TitleHeading = styled.h1`
    color: white;
    font-size: 45px;


    @media screen and (max-width: 960px){

    }
`;

export const PlayerDotaBoxContainer = styled(Container)`
    padding-left: 15px;
    padding-right: 15px;
    margin-right: auto;
    margin-left: auto;
    background-color: #101522;


    ${Container};


`;

export const PlayerList = styled.div`
    display: table;
    margin: 0 auto;
    padding: 2rem 0.1rem 0.1rem 0.1rem;
    vertical-align: top;
    width: 100%;
`;

export const PlayersDota2Box = styled.div`
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

export const PlayersDota2Image = styled.div`
    display: table-cell;
    vertical-align: middle;
    object-fit: cover;
    padding-right: 50px;
    
`;

export const TBDImage = styled.img.attrs({
    src: `${TBDPhoto}`
})`
    width: 200px;
    border-style: none;
    vertical-align: middle;
`;

export const PlayerDota2Img = styled.img.attrs({
    src: `${Ramz}`
})`
    width: 200px;
    border-style: none;
    vertical-align: middle;
`;

export const PlayerUsagi = styled.img.attrs({
    src:  `${Usagi}`
})`
    width: 200px;
    border-style: none;
    vertical-align: middle;
`;

export const PlayerHated = styled.img.attrs({
    src: `${Hated}`
})`
    width: 200px;
    border-style: none;
    vertical-align: middle;
`;

export const PlayerHavinci = styled.img.attrs({
    src: `${Havinci}`
})`
    width:  200px;
    border-style: none;
    vertical-align: middle;
`;



export const PlayerDota2Name = styled.div`
    margin-top: 30px;
    padding-left: 20px;
`;

export const PlayerDota2NameTitle = styled.h1`
    font-size: 24px;
    font-weight: 700;
    color: gold; 
    margin-bottom: 10px;
    border-bottom: 2px solid white;
    width: 15%;   
`;

export const PlayerDota2Bio = styled.p`
    padding-left: 20px;
    font-size: 20px;
    color: white;
    margin-top: 20px;
`;





