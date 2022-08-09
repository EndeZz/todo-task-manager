import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Caption = styled.span`
  margin-left: 18px;
`;

export const CheckboxWrapper = styled.div<{ checked: boolean }>`
  display: inline-block;
  vertical-align: middle;
  position: relative;
  top: 2px;

  & + ${Caption} {
    color: ${({ checked, theme }) =>
      checked ? theme.colors.primary : 'inherit'};
  }
`;

export const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const StyledCheckbox = styled.div<{ checked: boolean }>`
  display: inline-block;
  width: 28px;
  height: 28px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  background: ${({ checked, theme }) =>
    checked ? theme.colors.primary : theme.colors.light};

  transition: all 150ms;

  ${Icon} {
    visibility: ${({ checked }) => (checked ? 'visible' : 'hidden')};
  }
`;
