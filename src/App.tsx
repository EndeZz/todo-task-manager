import React from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { sidebarCategories } from '@constants/sidebarCategories';
import { Content, Sidebar } from '@containers';
import { Container, Main } from '@styles';

export const App = () => {
  const { pathname } = useLocation();
  const categoryPath = Object.values(sidebarCategories).some(
    (item) => pathname === `/${item}`
  );

  return (
    <Container>
      <Main>
        <Sidebar />

        <Routes>
          <Route path="/">
            <Route index element={<Content />} />
            <Route
              path=":category"
              element={categoryPath ? <Content /> : <Navigate to="/" replace />}
            />
          </Route>
        </Routes>
      </Main>
    </Container>
  );
};
