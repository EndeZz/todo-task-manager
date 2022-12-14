import { FC } from 'react';
import {
  Caption,
  CheckboxWrapper,
  HiddenCheckbox,
  Icon,
  Label,
  StyledCheckbox,
} from './Checkbox.styled';

interface CheckboxProps {
  className?: string;
  isChecked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  labelWrap?: boolean;
  label: string;
}

export const Checkbox: FC<CheckboxProps> = ({
  className,
  isChecked,
  labelWrap = true,
  label,
  ...attrs
}) => {
  const content = (
    <>
      <CheckboxWrapper className={className} checked={isChecked}>
        <HiddenCheckbox checked={isChecked} {...attrs} />
        <StyledCheckbox checked={isChecked}>
          <Icon viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12" />
          </Icon>
        </StyledCheckbox>
      </CheckboxWrapper>

      <Caption>{label}</Caption>
    </>
  );

  return labelWrap ? <Label>{content}</Label> : <>{content}</>;
};
