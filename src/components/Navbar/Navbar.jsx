import React from 'react'
import { CompareIcon, Container, HomeIcon, Links, LinkWrapper, LogoImg, LogoText, LogoWrapper, NavbarWrapper, Span } from './style'
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
               <Links to='/'><HomeIcon /> <Span>Home</Span> </Links>
               <Links to='/comparison'> <CompareIcon /> <Span>Comparison</Span></Links>
            </LinkWrapper>
        </NavbarWrapper>
    </Container>
  ) 
}

export default Navbar