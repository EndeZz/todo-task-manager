import React, { useState } from 'react';
import { Content } from './containers/Content';
import { Sidebar } from './containers/Sidebar';
import { Container, Main } from './styles';

export const App = () => {
  return (
    <Container>
      <Main>
        <Sidebar />
        <Content />
      </Main>
    </Container>
  );
};
