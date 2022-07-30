import styled from 'styled-components';

export const ContentWrapper = styled.section`
  width: 100%;
  height: 100%;
  padding: 30px 43px 30px 53px;
  overflow: hidden;
`;

export const Title = styled.h1`
  font-weight: ${({ theme }) => theme.typography.bold};
  font-size: 3.1rem;
  line-height: 3.7rem;
  margin-bottom: 25px;
`;

export const ContentList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: ${({ theme }) => theme.colors.gray300};
  font-weight: ${({ theme }) => theme.typography.regular};
  font-size: 1.8rem;
  line-height: 2.2rem;
  margin-top: 32px;
  height: 75%;
  overflow-y: auto;
`;
