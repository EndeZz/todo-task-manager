import styled from 'styled-components';

export const SidebarWrapper = styled.aside`
  border-right: 1px solid ${({ theme }) => theme.colors.line};
  width: 209px;
  height: 100%;
  padding: 0 51px;
`;

export const SidebarList = styled.ul`
  font-size: 2.2rem;
  font-weight: ${({ theme }) => theme.typography.bold};
  line-height: 2.6rem;
  color: ${({ theme }) => theme.colors.gray400};
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 139px;
`;
