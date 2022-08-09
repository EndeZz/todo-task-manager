import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const SidebarWrapper = styled.aside`
  border-right: 1px solid ${({ theme }) => theme.colors.line};
  width: 100%;
  min-width: 209px;
  max-width: 209px;
  height: 100%;
  padding: 0 51px;

  @media only screen and (max-width: ${({ theme }) => theme.media.md}) {
    max-width: inherit;
    display: flex;
    height: 70px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.line};
    overflow-x: auto;
  }

  @media only screen and (max-width: ${({ theme }) => theme.media.sm}) {
    padding: 0 31px;
  }
`;

export const SidebarList = styled.ul`
  font-size: 2.2rem;
  font-weight: ${({ theme }) => theme.typography.regular};
  line-height: 2.6rem;
  color: ${({ theme }) => theme.colors.gray400};
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 139px;

  @media only screen and (max-width: ${({ theme }) => theme.media.md}) {
    margin: 0;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  @media only screen and (max-width: ${({ theme }) => theme.media.sm}) {
    gap: 18px;
  }
`;

export const SidebarLink = styled(NavLink)`
  &[class*='active'] {
    font-weight: ${({ theme }) => theme.typography.bold};
    color: ${({ theme }) => theme.colors.primary};
  }

  &:hover {
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  }
`;
