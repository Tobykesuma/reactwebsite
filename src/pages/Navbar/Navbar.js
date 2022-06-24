import React, { useState, useEffect } from 'react';
import { createPopper } from '@popperjs/core';
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavbarSosialIcons,
    NavbarIconLink,

} from './NavbarElements';
import { 
    FaBars, 
    FaTimes,
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaTwitter,
    FaTiktok,
    FaDiscord 
} from 'react-icons/fa';

const Navbar = () => {

  // dropdown pops // 
  const [dropdown, setDropdown ] = React.useState(false);
  const btnDropDownRef = React.createRef();
  const DropdownRef = React.createRef();
  const openDropdown = () => {
    createPopper(btnDropDownRef.current, DropdownRef.current, {
        placement: "bottom-start"
    });
    setDropdown(true);
  };
  const closeDropDown = () => {
    setDropdown(false);
  };

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () =>  setClick(false);
  const showButton = () => {
    if (window.innerWidth <= 960) {
        setButton(false);
    } else {
        setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/' onClick={closeMobileMenu}></NavLogo>
                <MobileIcon onClick={handleClick}>
                    {click ? <FaTimes /> : <FaBars />}
                </MobileIcon>

                <NavMenu onClick={handleClick} click={click}>
                    <NavItem>
                        <NavLinks to='/' onClick={closeMobileMenu}>
                            HOME
                        </NavLinks>
                    </NavItem>

                    <NavItem>
                        <NavLinks to='/about' onClick={closeMobileMenu}>
                            ABOUT
                        </NavLinks>
                    </NavItem>

                    <NavItem>
                        <NavLinks to='/news' onClick={closeMobileMenu}>
                            NEWS
                        </NavLinks>
                    </NavItem>

                    <NavItem>
                        <NavLinks to='/schedule' onClick={closeMobileMenu}>
                            SCHEDULE
                        </NavLinks>
                    </NavItem>

                    <NavItem>
                        <NavLinks to='/teams' onClick={closeMobileMenu}>
                            TEAMS
                        </NavLinks>
                    </NavItem>
                
                    <NavItem>
                        <NavLinks to='/partners' onClick={closeMobileMenu}>
                            PARTNERS
                        </NavLinks>
                    </NavItem>

                    {/* Sosial Navbar */}

                    <NavbarSosialIcons>
                        <NavbarIconLink
                            href='https://www.facebook.com/TeamM11Esports' target='_blank'
                            arial-label='Facebook'
                        >
                            <FaFacebook />
                        </NavbarIconLink>

                        <NavbarIconLink
                            href='https://www.instagram.com/teamm11_esports/'
                            target='_blank'
                            aria-label='Instagram'
                        >
                            <FaInstagram />
                        </NavbarIconLink>

                        <NavbarIconLink
                            href='https://www.youtube.com/c/TeamM11ESports'
                            target='_blank'
                            aria-label='Youtube'
                        >
                            <FaYoutube />
                        </NavbarIconLink>

                        <NavbarIconLink
                            href='https://twitter.com/M11Team'
                            target='_blank'
                            aria-label='Twitter'
                        >
                            <FaTwitter />
                        </NavbarIconLink>

                        <NavbarIconLink
                            href='https://www.tiktok.com/@teamm11_esports'
                            target='_blank'
                            aria-label='Tiktok'
                        >
                            <FaTiktok />
                        </NavbarIconLink>

                        <NavbarIconLink
                            href='https://discord.gg/gj356CUz4w'
                            target='_blank'
                            aria-label='Discord'
                        >
                            <FaDiscord />

                        </NavbarIconLink>
                    </NavbarSosialIcons>
                </NavMenu>
            </NavbarContainer>
        </Nav>
    </>
  )
}

export default Navbar;