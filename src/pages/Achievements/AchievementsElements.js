import  styled from 'styled-components';
import Achievement1 from '../../assets/Tournament/esl.png';
import Achievement2 from '../../assets/Tournament/Intellogo.png';
import Achievement3 from '../../assets/Tournament/Lupon.png';
import Achievement4 from '../../assets/Tournament/Oxtradelogo.png';
import Achievement5 from '../../assets/Tournament/prasmul.png';

export const AchievementSection = styled.section`
    text-align: center;
    padding: 4rem 0;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 960px){
        padding: 2rem 0;
    }

`;

export const AchievementsTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media screen and (max-width: 960px){

    }
`;

export const AcheivementHeading = styled.h1`
    color: black;
    font-size: 50px;
    align-items: center;
    justify-content: center;

`;

export const AchievementsImage1 = styled.img.attrs({
    src: `${Achievement1}`
})`
    width: 100px;
    filter: drop-shadow(-12px 15px 13px rgba(0,0,0,0.25));
    justify-content: center;
    align-items: center;
    text-align: center;
`;

export const AchievementsImage2 = styled.img.attrs({
    src: `${Achievement2}`
})`
    width: 100px;
    filter: drop-shadow(-12px 15px 13px rgba(0,0,0,0.25));
    justify-content: center;
    align-items: center;
    text-align: center;
`;

export const AchievementsImage3 = styled.img.attrs({
    src: `${Achievement3}`
})`
    width: 100px;
    filter: drop-shadow(-12px 15px 13px rgba(0,0,0,0.25));
    justify-content: center;
    align-items: center;
    text-align: center;
`;

export const AchievementsImage4 = styled.img.attrs({
    src: `${Achievement4}`
})`
    width: 100px;
    filter: drop-shadow(-12px 15px 13px rgba(0,0,0,0.25));
    justify-content: center;
    align-items: center;
    text-align: center;
`;

export const AchievementsImage5 = styled.img.attrs({
    src: `${Achievement5}`
})`
    width: 100px;
    filter: drop-shadow(-12px 15px 13px rgba(0,0,0,0.25));
    justify-content: center;
    align-items: center;
    text-align: center;
`;

export const AchievementCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 2rem 0;
    position: relative;
    height: 100%;
    flex-shrink: 0;
    text-align: center;

`;

export const AchievementText = styled.h1`


`;

export const AchievementPlace = styled.div`

`;

export const AchievementName = styled.p`
    margin: 0.5rem 0;
    display: flex;
    font-size: 15px;

`;
