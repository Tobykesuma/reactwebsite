import styled from "styled-components";
import { Container } from "../../globalStyle";
import {Link} from 'react-router-dom';
import MLBBFinal from '../../assets/2nd_mlbb.jpg';
import MLBBRUNNERUP from '../../assets/mlbb_runnerup.jpg';
import LadiesValorant from '../../assets/ladies_valorant.jpg';


export const NewsSection = styled.section`
    text-align: center;
    padding: 2rem 0;
    background-color: #101522;
    display: flex;
    align-items: center;
`;

export const NewsTitle = styled.h1`
    font-size: 45px;
    color: white;
    margin: 8rem;
    border-bottom: 5px solid white;

    @media screen and (max-width: 960px){
        margin: 0;
        font-size: 24px;
        text-align: center;
        align-items: center;
        justify-content: center;
        margin: 2rem;
        border-bottom: 1px solid white;
    }
`;

export const NewsContainer = styled(Container)`

    ${Container}
`;

export const NewsContent = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    margin-bottom: 50px;


    @media screen and (max-width: 960px){
        display: grid;
        grid-template-columns: repeat(1, 1fr);
    }
`;


// // NEWS CARD CSS //

// export const NewsCardItems = styled.div`
//     padding: 20px;
//     background-color: white;
//     box-shadow: 0 1rem 1rem rgba(233,233,233, 0.15);
//     border-radius: 5px;
//     transition: 0.5s ease-in-out;

// `;

// export const NewsImageBox = styled.div`
//     display: flex;
// `;

// export const NewsImage = styled.img.attrs({
//     src: `${MLBBFinal}`
// })`
//     width: 100%;
//     height: 100%;
//     border-radius: 5px;
//     margin-bottom: 20px;

// `;

// export const NewsCategory = styled.div`
//     display: flex;
//     justify-content: space-between;
// `;

// export const NewsCategorySpan = styled.span`
//     font-size: 14px;
//     color: black;
//     transition: 0.5s ease-in-out;

// `;

// export const NewsCategoryLabel = styled.label`
//     background-color: #00488b;
//     font-size: 13px;
//     color: white;
//     padding: 5px 15px;
//     border-radius: 5px;

// `;

// export const NewsDetails = styled.div`

// `;

// export const NewsTautan = styled(Link)`

// `;

// export const NewsIcons = styled.div`

// `;
