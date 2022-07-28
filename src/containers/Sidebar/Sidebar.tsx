import { FC } from 'react';
import { SidebarList, SidebarWrapper } from './Sidebar.styled';

interface SidebarProps {}

export const Sidebar: FC<SidebarProps> = () => {
  return (
    <SidebarWrapper>
      <SidebarList>
        <li>All</li>
        <li>Groceries</li>
        <li>College</li>
        <li>Payments</li>
      </SidebarList>
    </SidebarWrapper>
  );
};
