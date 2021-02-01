import React, {useState, useContext} from 'react';
import {useHistory } from "react-router-dom";
import Authcontext from 'context/auth/auth';
import Themecontext from 'context/theme/themecontext';

import {StyledNavbar, IconsContainer, MenuContainer} from "./navbar.styles";
import {IconContainer, Icon, IconVal, MenuDotContainer, MenuDot} from './icon.styles';
import Button from 'components/button'

import cart from 'assets/cart.svg';

const Navbar = props => {
    const [open, setOpen] = useState(false);
    const {isSignedIn, signOut, user} = useContext(Authcontext);
    const {theme, themeAsset, changeTheme} = useContext(Themecontext);

    const  history = useHistory();
    const handleSignout = () => {
        signOut();
        history.push('/');
    }
    const handleColorChange =() => {
        let newTheme = theme === "dark" ? "light" : 'dark'
        changeTheme(newTheme);
        setOpen(false)
    }

    return(
            <StyledNavbar>
                <h2>Dashboard</h2>

                <IconsContainer>
                    <IconContainer onClick={() => history.push('/dashboard/cart')}>
                        <IconVal>12</IconVal>
                        <Icon src={cart} />
                    </IconContainer>
                    <MenuDotContainer onClick={() => setOpen(!open)}>
                        <MenuDot />
                        <MenuDot />
                        <MenuDot />
                        <MenuDot />
                        <MenuDot />
                        <MenuDot />
                        <MenuDot />
                        <MenuDot />
                        <MenuDot />
                    </MenuDotContainer>
                    
                   
                </IconsContainer>
                {open && <MenuContainer>
                    <button onClick={() => setOpen(false)}>Close</button>
                    <button onClick={handleColorChange}>{theme === 'dark' ? "Light" : "Dark"}</button>
                    <button onClick={handleSignout}>Sign Out</button>
                </MenuContainer>}
                </StyledNavbar>
    )
}

export default Navbar;
