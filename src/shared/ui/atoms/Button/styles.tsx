import styled from 'styled-components';
import type { ButtonProps } from './inde';

export const StyledButton = styled.button<{ variant?: ButtonProps['variant'] }>`
  height: 40px;
  padding: 10px 8px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 16px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: 0.3s;

  ${({ variant }) => {
    switch (variant) {
      case 'secondary':
        return `
          background-color: white;
          color: #ec7000;
          border: 2px solid #ec7000;
        `;
      case 'highlight':
        return `
          background-color: #E57200;
          color: white;
        `;
      case 'primary':
      default:
        return `
          background-color: #ec7000;
          color: white;
        `;
    }
  }}
`;
