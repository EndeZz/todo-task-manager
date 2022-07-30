import { FC } from 'react';
import { FormWrapper } from './Form.styled';

interface FormProps {
  children: React.ReactNode;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const Form: FC<FormProps> = ({
  children,
  onSubmit,
  ...attrs
}) => (
  <FormWrapper onSubmit={onSubmit} {...attrs}>
    {children}
  </FormWrapper>
);

