import React from 'react';
import { Container, ItemGroup, LinkGroup, LogoBlue, LogoWhite} from './style'
import { navbar } from '../../utils/navbar';
import logo from '../../assets/imgs/logoss.png';

export const Navbar = () => {
  return (
    <Container>
     
     <LogoBlue>web </LogoBlue> <LogoWhite>brain</LogoWhite>

    
    <LinkGroup>
    {
       navbar.map((value)=>(
         <h1>{value.title}</h1>
       ))
      }
    </LinkGroup>
    <ItemGroup>
      items
    </ItemGroup>
    </Container>


  );
};

export default Navbar;