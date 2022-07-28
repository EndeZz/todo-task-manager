import { FC, useState } from 'react';
import { Checkbox } from '../../components/Checkbox';
import { InputField } from '../../components/Input';
import {
  ContentWrapper,
  Title,
  TodoCaption,
  TodoContent,
  TodoItem,
  TodoList,
} from './Content.styled';

interface ContentProps {}

export const Content: FC<ContentProps> = () => {
  const [checked, setChecked] = useState(false);

  return (
    <ContentWrapper>
      <Title>All Tasks</Title>
      <InputField
        value={''}
        type="text"
        placeholder={`Add a new task inside 'All' category`}
        name=""
        id=""
        onChange={() => console.log('input')}
      />
      <TodoList>
        <TodoItem>
          <TodoContent>
            <Checkbox
              isChecked={checked}
              onChange={(e) => setChecked(e.target.checked)}
              label="Get a someone text"
            />
            <TodoCaption>Categories</TodoCaption>
          </TodoContent>
          <img src="./images/trash.svg" alt="trash icon" />
        </TodoItem>
      </TodoList>
    </ContentWrapper>
  );
};
