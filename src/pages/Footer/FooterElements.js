import styled from "styled-components";
import Logo from '../../assets/logo.png';
import { Link } from "react-router-dom";


export const FooterContainer = styled.section`
    background-color: #101522;
    padding: 4rem 0 2rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

export const FooterSubscription = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 24px;
    padding: 24px;
    color: #fff;
`;

export const FooterSubHeading = styled.p`
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucinda Sans', Arial, sans-serif;
    margin-bottom: 24px;
    font-size: 24px;
    text-align: center;
    align-items: center;
    justify-content: center;
`;

export const FooterSubText = styled.p`
    margin-bottom: 24px;
    font-size: 20px;
`;

export const FooterForm = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 960px){
        flex-direction: column;
        width: 80%;
    }
`;

export const FormInput = styled.input`
    padding: 10px 20px;
    border-radius: 2px;
    margin-right: 25px;
    width: 500px;
    outline: none;
    border: none;
    font-size: 16px;
    border: 5px solid #fff;

    &::placeholder {
        color #242424;
    }

    @media screen and (max-width: 960px){
        width: 100%;
        margin: 0 0 16px 0;
    }
`;

export const FooterLinkContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

    @media screen and (max-width: 960px) {
        padding-top: 32px;
        padding-left: 30px;
        justify-content: left;
    }
`;

export const FooterLinkWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 960px) {
        flex-direction: column;
    }
`;

export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: center;
    width: 160px;
    justify-content: center;
    box-sizing: border-box;
    color: #fff;

    @media screen and (max-width: 420px){
        margin: 0;
        padding: 10px;
        width: 100%;
        text-align: left;
    }
`;

export const FooterLinkTitle = styled.h2`
    margin-bottom: 16px;
`;

export const FooterLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    margin-bottom 0.5rem;

    &:hover {
        color: #0457FB;
        transition: 0.3s ease-out;
    }
`;

export const FooterCopyRight = styled.div`
    max-width: 1000px;
    width: 100%;
    border-top:  1px  solid #fc0;
`;

export const FooterCCWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 150%;
    max-width: 1000px;
    margin: 20px auto 0 auto;

    @media screen and (max-width: 960px) {
        flex-direction: column;
        width: 100%;
    }
`;

export const FooterLogoCC = styled.img.attrs({
    src: `${Logo}`
})`
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    width: 50px;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
`;

export const WebsiteRights = styled.small`
    color: white;
    margin-bottom: 16px;
`;




