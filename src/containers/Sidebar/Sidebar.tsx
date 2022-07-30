import { FC } from 'react';
import { sidebarCategories } from '../../constants/sidebarCategories';
import { SidebarLink, SidebarList, SidebarWrapper } from './Sidebar.styled';
import { v4 as createId } from 'uuid';

export const Sidebar: FC = () => {
  return (
    <SidebarWrapper>
      <SidebarList>
        {sidebarCategories.map((category) => (
          <li key={createId()}>
            <SidebarLink to={`/${category}`}>{category}</SidebarLink>
          </li>
        ))}
      </SidebarList>
    </SidebarWrapper>
  );
};
