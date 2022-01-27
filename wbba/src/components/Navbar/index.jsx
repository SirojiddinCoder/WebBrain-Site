import React,{useState} from 'react';
import { Container, ItemGroup, LinkGroup,Link } from './style';
import {navbar} from '../../utils/navbar'
import { Outlet } from 'react-router-dom';

export const Navbar = () => {
  const [active, setActive] = useState('/asosiy')
  console.log(active);
  return (
    <div style={{display:'flex', flexDirection:'column',width:'100%'}}>
  <Container>
      <span>LOGO</span>

      <LinkGroup>
     
      {
       navbar.map((value)=>(
         <Link key={value.id}
         onClick={()=> setActive(value.path)}
         active={active === value.path} to={value.path}>{value.title}</Link>
       ))
      }
      </LinkGroup>
      <ItemGroup>
        items
      </ItemGroup>
  </Container>
  <Outlet />
  </div>
  )
};

export default Navbar;