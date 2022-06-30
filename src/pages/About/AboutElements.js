import styled from "styled-components";
import { Link } from "react-router-dom";
import AboutImage from '../../assets/AboutBG.jpg';
import BGAboutTop from '../../assets/background_about.jpg';
import { Container } from "react-bootstrap";

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


// AboutNav //

export const AboutNavSection = styled.section`
    height: 57vh;
    display: flex;
    

    @media screen and (max-width: 960px){
        height: 20vh;
    }

`;

export const AboutNavBG = styled.div`
    background-position: 50%;
    background-size: cover;
    background-repeat: no-repeat;
    opacity: .3;
    z-index: 1;
    position: relative;
    background-image: url(${BGAboutTop});
    border: 1px solid white;
    height: 350px;
    width: 3000px;


    @media screen and (max-width: 960px){
        height: 100px;
        width: 390px;
    }
`;

export const AboutTitleNav = styled.div`

`;

export const AboutNavTitle = styled.h1`
    align-items: center;
    color: black;
    text-align: center;
    font-size: 50px;
    position: absolute;
    left: 0;
    right: 0;
    top: 21%;

    @media screen and (max-width: 960px){
        font-size: 24px;
        top: 17%;
    }

`;

export const AboutNavFlexSpace = styled.div`
    display: flex;
    justify-content: space-between;
`

export const AboutNavSubSection = styled.div`
    padding: 0;

    @media screen and (max-width: 960px){

    }
`;

export const AboutNavSub = styled.p`
    align-items: center;
    font-size: 40px;
    font-weight: 600;
    justify-content: center;
    text-align: center;

    @media screen and (max-width: 960px){
        font-size: 20px;
    }
`;

export const ContactAbout = styled.div`
    padding: 1rem 0;
    height: 100vh;

    @media screen and (max-width: 960px){
        height: 60vh;
    }
`;

export const ContactTitle = styled.h1`
    margin: 30px auto;
    align-items: center;
    font-size: 40px;
    justify: center;
    text-align: center;

    @media screen and (max-width: 960px){
        font-size: 24px;
    }
`;

export const ContactContainer = styled(Container)`
    grid-gap: 12%;
    display: grid;
    gap: 12%;
    grid-template-columns: 30% 58%;
    margin: 0 auto;
    width: 60%;

    @media screen and (max-width: 960px){
        gap: 2rem;
        grid-template-columns: 1fr;
        margin-top: 1rem;
        width: 70%;
    }
`;

export const ContactOptionSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    @media screen and (max-width: 960px){

    }
`;

export const ContactOption = styled.article`
    background: ;
    padding: 1.2rem;
    border-radius: 1.2rem;
    text-align: center;
    border: 1px solid transparent;
    transition: all 0.2s ease-out;

    &:hover {
        background: ;
    }
`;

export const ContactButton = styled.button`
    width: max-content;
    display: inline-block;
    color: ;
    padding: 0.75rem 1.2rem;
    border-radius: 0.5rem;
    cursor: pointer;
    border: 1px solid ;
    transition: all 0.2s ease-out;
    font-size: 35px;

    &:hover {
        border-color: transparent;
        background: ;
        color: white;
    }


    @media screen and (max-width: 960px){

    }
`;


export const ContactName = styled.h1`
    font-size: 40px;
    text-align: center;

    @media screen and (max-width: 960px){
        font-size: 20px;
    }
`;

export const ContactName2 = styled.h2`
    font-size: 40px;
    text-align: center;

    @media screen and (max-width: 960px){
        font-size: 20px;
    }
`;

export const ContactLinks = styled(Link)`

`;

export const ContactIcons = styled.icons`

`;



export const ContactInput = styled.input`
    width: 100%;
    padding: 1.5rem;
    border-radius: 0.5rem;
    background: transparent;
    border: 2px solid ;
    resize: none;
    font-size: 30px;

    @media screen and (max-width: 960px){

    }
`;

export const ContactTextarea = styled.textarea`
    width: 100%;
    padding: 1.5rem;
    border-radius: 0.5rem;
    background: transparent;
    border: 2px solid ;
    resize: none;
    font-size: 30px;

    @media screen and (max-width: 960px){

    }
`;















    

