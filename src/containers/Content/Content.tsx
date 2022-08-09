import React, { FC, useCallback, useState } from 'react';
import { useAppDispatch, useAppSelector, useCategoryPath } from '@hooks';
import { Form, InputField } from '@components';
import { CategoryType, ITask } from '@models/ITask';
import { sidebarCategories } from '@constants/sidebarCategories';
import { taskSelector } from '@store/task/taskSelectors';
import { addTask, removeTask, toggleCompleted } from '@store/task/taskSlice';

import { ContentItem } from './ContentItem';
import { ContentWrapper, Title, ContentList } from './Content.styled';

export const Content: FC = () => {
  const categoryName = useCategoryPath();
  const [inputValues, setInputValues] = useState<string>('');

  const dispatch = useAppDispatch();
  const { taskList } = useAppSelector(taskSelector);

  const currentCategory = taskList.filter(
    (list) => list.category === categoryName
  );

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValues(e.target.value);
  }, []);

  const handleRemove = useCallback(
    (id: string) => {
      dispatch(removeTask(id));
    },
    [dispatch]
  );

  const handleToggleMode = useCallback(
    (id: string) => {
      dispatch(toggleCompleted(id));
    },
    [dispatch]
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const newTask: ITask = {
        id: String(Date.now()),
        completed: false,
        description: inputValues,
        category:
          Object.keys(sidebarCategories)[0] === categoryName
            ? 'Uncategorized'
            : (categoryName as CategoryType),
      };

      if (inputValues.length) {
        dispatch(addTask(newTask));
        setInputValues('');
      }
    },
    [dispatch, inputValues, categoryName]
  );

  return (
    <ContentWrapper>
      <Title>{categoryName} Tasks</Title>

      <Form onSubmit={handleSubmit}>
        <InputField
          value={inputValues}
          type="text"
          placeholder={`Add a new task inside '${categoryName}' category`}
          onChange={handleChange}
        />
      </Form>

      <ContentList>
        {Object.keys(sidebarCategories)[0] === categoryName
          ? taskList.map((item) => (
              <ContentItem
                key={item.id}
                item={item}
                handleToggleMode={handleToggleMode}
                handleRemove={handleRemove}
              />
            ))
          : currentCategory.map((item) => (
              <ContentItem
                key={item.id}
                item={item}
                handleToggleMode={handleToggleMode}
                handleRemove={handleRemove}
              />
            ))}
      </ContentList>
    </ContentWrapper>
  );
};
