import styled from "styled-components";
import { Container } from "../../globalStyle";
import Dota2BackGroundTop from '../../assets/dota.jpg';
import Dota2Logos from '../../assets/dota2logo.png';


export const Dota2Section = styled.section`
    display: flex;
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
    width: 3000px; 
`;

export const Dota2Border = styled.div`
    box-shadow: 1px 1px 1px 1px black;
`;

export const Dota2Title = styled.div`
    top: 20%;
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

// export const Dota2Logo = styled.div`
//     background-image: url(${Dota2Logos});
//     background-position: center;
//     background-repeat: no-repeat;
//     height: 500px;
//     width: 500px;
//     left: 30px;
//     position: absolute;
// `;


export const PlayerDotaBoxContainer = styled(Container)`
    display: flex;
    padding: 15px 15px 15px 15px;
    align-items: center;
    align-content: center;
    margin: 0 auto;

    ${Container};


`;

export const PlayerList = styled.div`
    width: 100%;
    display: table;
    margin: 0 auto;
    padding: 2rem 0.1rem 0.1rem 0.1rem;
    vertical-align: top;
`;

export const PlayersDota2Box = styled.div`
    display: table;
    width: 50%;
    padding: 2rem auto;
    gap: 2rem;
    border: 1px solid #e1e1e1;
    align-items: center;
    justify-content: center;


`;

export const PlayersDota2Image = styled.div`
    display: table-cell;
    vertical-align: middle;
    object-fit: cover;
    
`;

export const 


