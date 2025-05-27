import styled from 'styled-components';

interface MarginProps {
  height?: number | string;
  width?: number | string;
}

export const Margin = styled.div<MarginProps>`
  height: ${({ height }) => (typeof height === 'number' ? `${height}px` : height || '0px')};
  width: ${({ width }) => (typeof width === 'number' ? `${width}px` : width || '0px')};
`;
