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
    DropDownTeams,

} from './NavbarElements';
import { FaBars, FaTimes } from 'react-icons/fa';

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
                        <NavLinks to='/teams' ref={btnDropDownRef} onClick={() => {
                            dropdown ? closeDropDown() : openDropdown ();
                        }}> TEAMS
                        </NavLinks>
                            <div ref={DropdownRef} className={
                                (dropdown ? 'block' : 'hidden')
                            }
                            >
                                <a href='/dota2' className='text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-white' onClick={e =}
                            </div>

                    </NavItem>

                </NavMenu>
            </NavbarContainer>
        </Nav>
    </>
  )
}

export default Navbar