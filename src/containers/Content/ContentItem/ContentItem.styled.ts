import styled from 'styled-components';

export const TaskItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin-right: 10px;

  & button {
    visibility: hidden;
    opacity: 0;
  }

  &:hover button {
    visibility: visible;
    opacity: 1;
  }
`;

export const TaskContent = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
`;

export const TaskCaption = styled.span`
  padding: 5px 19px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.light};
  font-weight: ${({ theme }) => theme.typography.regular};
  font-size: 1.2rem;
  line-height: 1.4rem;
`;
