import React from 'react';
import styled from 'styled-components';
import { Props } from './Button.types';

interface ButtonProps {
  readonly primary?: boolean;
}

const StyleButton = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-family: Poppins;
  border-radius: 25px;
  justify-content: "center";
  background: ${(props) => (props.primary ? props.theme.colors.primary : 'transparent')};
  border: ${(props) => (props.primary ? 'none' : `solid 2px ${props.theme.colors.primary}`)};
  color: ${(props) => (props.primary ? 'white' : `${props.theme.colors.primary}`)};
`;

/**
- Use a button when you need to perform an action.
- If you need to navigate to another page use the Link component.
* */
function Button({ children, primary }: Props) {
  return (
    <StyleButton primary={primary}>
      {children}
    </StyleButton>
  );
}

export default Button;
