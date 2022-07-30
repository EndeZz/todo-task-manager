import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Content } from './containers/Content';
import { Sidebar } from './containers/Sidebar';
import { Container, Main } from './styles';

export const App = () => {
  return (
    <Container>
      <Main>
        <Sidebar />

        <Routes>
          <Route path="/">
            <Route index element={<Content />} />
            <Route path=":category" element={<Content />} />
          </Route>
        </Routes>
      </Main>
    </Container>
  );
};
