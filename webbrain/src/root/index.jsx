import React from 'react';
import Navbar from '../components/Navbar';

import { Container } from './style'
import { BrowserRouter} from 'react-router-dom'

export const Root = () => {
  return (
    <Container>
        <BrowserRouter>
        <Navbar />
        </BrowserRouter>    
   
    </Container>


  );
};

export default Root;