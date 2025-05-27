import styled from 'styled-components';

interface RowProps {
  justify?: string;
  align?: string;
  gap?: string;
  responsive?: boolean;
  breakpoint?: string;
}

export const Row = styled.div<RowProps>`
  display: flex;
  flex-wrap: nowrap;
  justify-content: ${({ justify }) => justify || 'flex-start'};
  align-items: ${({ align }) => align || 'stretch'};
  gap: ${({ gap }) => gap || '0'}px;

  ${({ responsive, breakpoint = '900px' }) =>
    responsive &&
    ` 
    @media (max-width: ${breakpoint}px) {
      flex-direction: column;
      align-items: center;

    }
  `}
`;
