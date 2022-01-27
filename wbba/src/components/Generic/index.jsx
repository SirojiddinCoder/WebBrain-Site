import React, { useState } from 'react';
import { Container } from './style';
import { useLocation } from 'react-router-dom';


export const Generic = () => {
  const location = useLocation();
  console.log(location);
  return <Container>
      <h1>Generic {location?.pathname}</h1>
  </Container>
};

export default Generic;