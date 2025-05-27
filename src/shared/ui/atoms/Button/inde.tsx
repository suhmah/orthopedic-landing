import { type ReactNode } from 'react';
import { Row } from '../Row';
import { Text } from '../text/inde';
import { StyledButton } from './styles';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'highlight';
  label: string;
  onClick?: () => void;
  children?: ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  variant = 'primary',
  children,
  ...rest
}) => {
  const getTextColor = () => {
    if (variant === 'secondary') return '#EC7000';
    return '#FFFFFF';
  };

  return (
    <StyledButton variant={variant} {...rest}>
      <Row>
        <Text variant="paragraphNormal" color={getTextColor()}>
          {label}
        </Text>
        {children}
      </Row>
    </StyledButton>
  );
};
