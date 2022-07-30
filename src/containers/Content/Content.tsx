import React, { FC, useCallback, useState } from 'react';
import { Form } from '../../components/Form';
import { InputField } from '../../components/Input';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useCategoryPath } from '../../hooks/useCategoryPath';
import { CategoryType, ITask } from '../../models/ITask';
import { taskSelector } from '../../store/task/taskSelectors';
import {
  addTask,
  removeTask,
  toggleCompleted,
} from '../../store/task/taskSlice';
import { ContentWrapper, Title, ContentList } from './Content.styled';
import { ContentItem } from './ContentItem/ContentItem';

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
          categoryName === 'All'
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
        {taskList && categoryName === 'All'
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
