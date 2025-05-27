import styled from 'styled-components';

export const BreadcrumbWrapper = styled.nav`
  display: flex;
  align-items: center;
  font-family: 'Raleway', sans-serif;
  font-size: 14px;
  color: #121212;
  gap: 4px;
`;

export const Crumb = styled.span<{ $isCurrent?: boolean }>`
  color: ${({ $isCurrent }) => ($isCurrent ? '#121212' : '#989D9E')};
  text-decoration: none;

  &:hover {
    text-decoration: ${({ $isCurrent }) => ($isCurrent ? 'none' : 'underline')};
  }
`;

export const Separator = styled.span`
  margin: 0 6px;
  color: #121212;
`;
