import React from 'react';
import Navbar from '../components/Navbar'
import { Container } from './style';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import { navbar } from '../utils/navbar';
import { getValue } from '@testing-library/user-event/dist/utils';

export const Root = () => {
  return <Container>
      <BrowserRouter>
        <Routes>
           <Route element={<Navbar />}>
               {
                   navbar.map(({path,id,Element})=>(
                    <Route  key={id} path={path} element={<Element />} />

                   ))
               }
          
          
           </Route>
        </Routes>
    </BrowserRouter>
  </Container>
};

export default Root;