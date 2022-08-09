import React, { FC } from 'react';
import { Button, Checkbox } from '@components';
import { ITask } from '@models/ITask';

import { TaskCaption, TaskContent, TaskItem } from './ContentItem.styled';

interface ContentItemProps {
  item: ITask;
  handleToggleMode: (e: string) => void;
  handleRemove: (e: string) => void;
}

export const ContentItem: FC<ContentItemProps> = ({
  item,
  handleToggleMode,
  handleRemove,
}) => (
  <TaskItem>
    <TaskContent>
      <Checkbox
        isChecked={item.completed}
        onChange={() => handleToggleMode(item.id)}
        label={`${item.description}`}
      />
      <TaskCaption>{item.category}</TaskCaption>
    </TaskContent>

    <Button onClick={() => handleRemove(item.id)}>
      <img src="./images/trash.svg" alt="trash icon" width={16} height={18} />
    </Button>
  </TaskItem>
);
