import styled from "styled-components";
import {NavLink} from 'react-router-dom'

export const Container = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
height: 90px;
`;

export const LinkGroup = styled.div`
display: flex;
align-items: center;

color: #1B1A18;
`;
export const ItemGroup = styled.div`
display: flex;
`
export const Link = styled(NavLink)`
text-decoration: none;
/* font-family: Inter; */
font-style: normal;
font-weight: normal;
font-size: 22px;
line-height: 26px;
margin: 0 25px;

color: #1B1A18;
color: ${({active})=> (active ? '#0076F5' : '#1B1A18')};
`;