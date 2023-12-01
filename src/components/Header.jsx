import React from 'react'
import logo from '../assets/logo.svg'
import CardStyle, { HeaderContainer, Logo, NavLink, Navigation, HeaderLogo } from './Styles'
import { googleLogout } from '@react-oauth/google';
import { useAuth } from './AuthContext';

function Header() {
 const { logout } = useAuth();
 const handleLogout = async () => {
  try {
    googleLogout();

    logout();
  } catch (error) {
    console.error('Logout failed:', error);
  }
}; 
    return (
    <HeaderContainer>
  <HeaderLogo src={logo}></HeaderLogo>
    <Navigation>
    <button style={{background:'none',border:'none'}} onClick={() => handleLogout}><NavLink href="/signup">Logout</NavLink></button> 
    </Navigation>
  </HeaderContainer>
  )
}

export default Header