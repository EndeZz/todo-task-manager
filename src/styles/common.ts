import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 10px;
  max-width: 1003px;
  width: 100%;
  height: 100vh;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

`;

export const Main = styled.main`
  display: flex;
  height: 702px;
  width: 100%;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
  background-color: ${({ theme }) => theme.colors.light};
`;
