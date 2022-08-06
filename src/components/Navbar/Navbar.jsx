import React from 'react'
import { CompareIcon, Container, HomeIcon, Links, Links1, LinkWrapper, LogoImg, LogoText, LogoWrapper, NavbarWrapper, Span } from './style'
import Logo from '../../assets/icons/logo.png';





const Navbar = () => {
  return (
    <Container>
        <NavbarWrapper>
            <LogoWrapper>
               <LogoImg src={Logo} />
               <LogoText>Flight</LogoText>
            </LogoWrapper>
            <LinkWrapper>
               <Links1 to='/'><HomeIcon /> <Span>Home</Span> </Links1>
               <Links to='/comparison'> <CompareIcon /> <Span>Distance</Span></Links>
            </LinkWrapper>
        </NavbarWrapper>
    </Container>
  ) 
}

export default Navbar