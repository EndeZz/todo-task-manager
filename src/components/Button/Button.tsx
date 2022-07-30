import { FC } from 'react';
import { ButtonWrapper } from "./Button.styled";

interface ButtonProps {
  children: React.ReactNode;
  type?: string;
}

export const Button: FC<ButtonProps &  React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  type,
  ...attrs
}) => (
  <ButtonWrapper type={type} {...attrs}>
    {children}
  </ButtonWrapper>
)
