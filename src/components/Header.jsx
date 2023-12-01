import React from 'react'
import logo from '../assets/logo.svg'
import CardStyle, { HeaderContainer, Logo, NavLink, Navigation, HeaderLogo } from './Styles'
import { googleLogout } from '@react-oauth/google';

googleLogout();
function Header() {
  
    return (
    <HeaderContainer>
  <HeaderLogo src={logo}></HeaderLogo>
    <Navigation>
    <button style={{background:'none',border:'none'}} onClick={() => googleLogout()}><NavLink href="/signup">Logout</NavLink></button> 
    </Navigation>
  </HeaderContainer>
  )
}

export default Header