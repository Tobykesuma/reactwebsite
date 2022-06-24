import styled from "styled-components";
import { Container } from "../../globalStyle";
import { Link } from 'react-router-dom';
import Logo  from '../../assets/logo.png';


export const Nav = styled.nav`
    background: #101522;
    height: 110px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size:1.2rem;
    position: sticky;
    top: 0;
    z-index: 999;
`;

export const NavbarContainer = styled(Container)`
    display:flex;
    justify-content: space-between;
    height: 80px;

    ${Container}
`;

export const NavLogo = styled.img.attrs({
    src: `${Logo}`
})`
    justify-self: flex-end;
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-top: 5px;
`;

export const MobileIcon = styled.div`
    display: none;
    color: white;

    @media screen and (max-width: 960px) {
        display: block;
        position: absolute;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;

    @media screen and (max-width: 960px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 88vh;
        position: absolute;
        top: 100px;
        opacity: 1;
        transition: all 0.6s ease-out;
        background: #101522;
        left: ${({ click }) => (click ? 0 : '-100%')};
    }
`;


export const NavItem = styled.li`
    @media screen and (max-width: 960px){
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
`;

export const NavLinks = styled(Link)`
    color: white;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 100%;

    @media screen and (max-width: 960px){
        text-align: center;
        padding: 2rem;
        width: 100%;
        display: table;

        &:hover {
            color: gold;
            transition: all 0.3s ease;
        }
    }
`;

export const NavbarSosialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 130px;
    top: 0;

    @media screen and (max-width: 960px){
        width: 180px;
        margin: 20px 20px 20px 20px;
        padding-top: 0;
    }
`;

export const NavbarIconLink = styled.a`
    font-size: 24px;
    color: white;
    padding: 0.1rem 0.1rem;

    &:hover {
        color: gold;
    }

    @media screen and (max-width: 960px){
        text-align: center;
        align-items: center;
        justify-content: center;
    }
`;





