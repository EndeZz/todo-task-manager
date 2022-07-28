import styled from 'styled-components';

export const Label = styled.label`
  font-size: 1.6rem;
  line-height: 2.2rem;
  display: grid;
  position: relative;
  gap: 8px;
`;

export const Input = styled.input`
  height: 48px;
  width: 100%;
  padding: 10px 27px 15px;
  border: 1px solid transparent;
  border-radius: 8px;
  outline: none;
  background-color: ${({ theme }) => theme.colors.gray100};
  color: ${({ theme }) => theme.colors.gray200};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-size: 1.6rem;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.gray200};
  }

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray200};
  }
`;
