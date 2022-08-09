import { FC } from 'react';
import { sidebarCategories } from '@constants/sidebarCategories';

import { SidebarLink, SidebarList, SidebarWrapper } from './Sidebar.styled';
import { v4 as createId } from 'uuid';

export const Sidebar: FC = () => {
  return (
    <SidebarWrapper>
      <SidebarList>
        {Object.entries(sidebarCategories).map((category) => (
          <li key={createId()}>
            <SidebarLink to={`/${category[1]}`}>
              {String(category[0]) === 'All' ? category[0] : category[1]}
            </SidebarLink>
          </li>
        ))}
      </SidebarList>
    </SidebarWrapper>
  );
};
