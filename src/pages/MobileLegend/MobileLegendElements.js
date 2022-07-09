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
        text-align: center;
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

    @media screen and (max-width: 960px){
        height: 100px;
    }
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
        top: 1.8%;
    }
`;

export const MobileLegendTitleHeading =  styled.h1`
    font-size: 45px;
    color: white;

    @media screen and (max-width: 960px){
        font-size: 20px;
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
        margin-left: 2.2rem;
        width: 10%;
    }
`;

export const MLBBImagePlayers = styled.div`
    display: table-cell;
    vertical-align: middle;
    object-fit: cover;
    padding-right: 50px;

    @media screen and (max-width: 960px){
        padding-right: 0;
    }
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

    @media screen and (max-width: 960px){
        width: 205px;
    }
`;

export const ImgReyzo = styled.img.attrs({
    src:`${Reyzo}`
})`
    width: 200px;
    border-style: none;
    vertical-align: middle;

    @media screen and (max-width: 960px){
        width: 205px;
    }
`;

export const ImgWinnie = styled.img.attrs({
    src:`${Winnie}`
})`
    width: 200px;
    border-style: none;
    vertical-align: middle;

    @media screen and (max-width: 960px){
        width: 195px;
    }
`;

export const ImgZyro = styled.img.attrs({
    src:`${Zyro}`
})`
    width: 200px;
    border-style: none;
    vertical-align: middle;

    @media screen and (max-width: 960px){
        width: 208px;
    }
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

    @media screen and (max-width: 960px){
        font-size: 20px;
    }
`;

export const MLBBBio = styled.p`
    padding-left: 20px;
    font-size: 20px;
    color: white;
    margin-top: 20px;

    @media screen and (max-width: 960px){
        font-size: 10px;
    }
`;

// Achievements MLBB Teams //

export const AchievementsTrophy = styled.div`
    justify-content: center;
    padding: 4rem 0;
    align-items: center;
    text-align: center;
    background-color: #101522;
    
    @media screen and (max-width: 960px){
        padding: 2rem 0;
    }
`;

export const AchievementsTrophyTitle = styled.h1`
    font-size: 40px;
    color: white;
    
    @media screen and (max-width: 960px){
        font-size: 24px;
    }
`;

export const TrophySection = styled.div`
    display: inline-block;
    padding-left: 2rem 0;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: #101522;

    @media screen and (max-width: 960px){
        padding: 0;
    }
`;

export const TrophyContainer = styled(Container)`
    margin-right: auto;
    margin-left: auto;

    ${Container}
`;

export const TrophyBox = styled.div`
    margin: 2rem;
    margin-left: auto;
    margin-right: auto;
    padding-left: 2rem;
    
    @media screen and (max-width: 960px){
        padding-left: 0;
        margin: 0;
    }
`;

export const TrophyIcons = styled.div`
    color: gold;
    font-size: 24px;
    text-align: center;
    justify-content: center;
    display: flex;
    align-items: center;
    margin: 10px auto;

    @media screen and (max-width: 960px){
        font-size: 20px;
        margin: 15px auto;
    }

`;

export const TrophyText = styled.h2`
    color: white;
    font-size: 15px;
    text-align: center;
    justify-content: center;
    align-items: center;
    margin: 10px auto;

    @media screen and (max-width: 960px){
        font-size: 13px;

    }
`;

export const TrophyTextName = styled.h1`
    color: white;
    font-size: 19px;
    text-align: center;
    justify-content: center;
    align-items: center;
    margin: 10px auto;

    @media screen and (max-width: 960px){
        font-size: 14px;
    }
`;

export const TrophyHR = styled.hr`
    width:  90%;
    justify-content: center;
    text-align: center;
    align-items: center;
    padding-left: 20px;
    margin: 10px auto;
    margin-left: auto;
    margin-right: auto;
`;

