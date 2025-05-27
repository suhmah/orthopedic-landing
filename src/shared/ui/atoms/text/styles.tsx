import styled from 'styled-components';
import type { TextProps } from './inde';

export const StyledText = styled.p<{
  variant: TextProps['variant'];
  color?: string;
  $underline?: boolean;
}>`
  margin: 0;
  font-family: 'Raleway', sans-serif;
  color: ${({ color }) => color || '#000'};
  text-decoration: ${({ $underline }) => ($underline ? 'underline' : 'none')};
  ${({ variant }) => {
    switch (variant) {
      case 'titleH1':
        return `
          font-size: 48px;
          font-weight: 700;

          background-color: #80276C;
          color: white;
          padding: 8px;
          border-radius: 4px;
        `;
      case 'paragraphNormalMedium':
        return `
          font-size: 16px;
          font-weight: 500;

          color: #4C4D4C;
        `;
      case 'paragraphNormalRegular':
        return `
          font-size: 16px;
          font-weight: 400;
          
          color: #121212;
        `;
      case 'paragraphSmall':
        return `
          font-family: Roboto, sans-serif;
          font-size: 14px;
          font-weight: 400;
          color: #707372;
        `;
      // existentes
      case 'paragraphRegular':
        return `font-size: 16px; font-weight: 400; `;
      case 'paragraphNormal':
        return `font-size: 16px; font-weight: 500;`;
      case 'paragraphLarge':
        return `font-size: 24px; font-weight: 500;`;
      case 'title':
        return `font-size: 24px; font-weight: 700;`;
      case 'subtitle':
        return `font-size: 18px; font-weight: 600;`;
      case 'caption':
        return `font-size: 14px; color: #777;`;
      case 'paragraphCaption':
        return `font-size: 14px; font-weight: 400; `;
      case 'paragraphBold':
        return `font-size: 16px; font-weight: 700;`;
      default:
        return '';
    }
  }}
`;
