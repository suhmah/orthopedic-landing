import { StyledText } from './styles';
export interface TextProps {
  children: React.ReactNode;
  variant?:
    | 'paragraphNormal'
    | 'paragraphLarge'
    | 'title'
    | 'subtitle'
    | 'caption'
    | 'titleH2'
    | 'paragraphCaption'
    | 'paragraphBold'
    | 'paragraphRegular'
    | 'titleH1'
    | 'paragraphNormalMedium'
    | 'paragraphNormalRegular'
    | 'paragraphSmall';
  as?: React.ElementType;
  className?: string;
  color?: string;
  underline?: boolean;
  fontSize?: number;
}

export const Text: React.FC<TextProps> = ({
  children,
  variant = 'paragraphNormal',
  className,
  color,
  underline,
  fontSize,
}) => {
  return (
    <StyledText
      $underline={underline}
      variant={variant}
      color={color}
      className={className}
      style={{ fontSize: fontSize }}
    >
      {children}
    </StyledText>
  );
};
