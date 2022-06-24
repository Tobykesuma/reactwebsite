import styled from "styled-components";
import Mask from '../../assets/MASKER.png';

export const ProductSection = styled.section`
    padding: 4rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    // background-color: #101522;
    // clip-path: ellipse(130px 140px at 10% 20%);

`;

export const ProductTitle = styled.h1`
    display: flex;
    font-size: 45px;
    text-align: center;
    padding: 25px 0;
    color: black;

    @media screen and (max-width: 960px) {
        font-size: 30px;
    }
`;

export const ProductWrapper = styled.div`
    max-width: 100rem;
    padding: 2rem;
    margin: 0 auto;

    @media screen and (max-width: 960px) {
        padding: 1rem;
    }
`;

export const ProductGallery = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-template-rows: repeat(4, 12.5rem);
    gap: .5rem;

    @media screen and (max-width: 960px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 560px) {
        display: block;
    }
`;

export const ProductFirst = styled.div`
    grid-column: 1 / span 1;
    grid-row: 1 / span 1;

`;

export const ProductLinks = styled.a`
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    overflow: hidden;
    
    &:hover {
        transform: scale(1.2);
        filter: blur(2px);
    }

    @media screen and (max-width: 960px) {
        height: 80vw;
    }
`;

export const ImgProductMask = styled.img.attrs({
    src: `${Mask}`
})`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.05);
    transition: 
        transform .5s,
        filter .5;
    background: #101522;
`;

export const ProductOverlay = styled.div`
    position: absolute;
    top: 0; right: 0;
    bottom: 0; left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgba(0,0,0, 0.4);
    font-size: 32px;
    color: white;
    text-transform: uppercase;
    opacity: 0;
    pointer-events: none;
    transition: opacity .2s;

    &:hover {
        opacity: 1;
    }

    @media screen and (max-width: 960px) {
        font-size: 24px;
    }
`;

export const ProductSpanName = styled.span`
    position: relative;
    line-height: 48px;
    color: white;
    font-size: 24px;
    
    &:before,
    &:after {
        content: '';
        position: absolute;
        height: 2px;
        width: 0;
        background: white;
        transition: width .3s ease-out 2.s;
    }
`;









