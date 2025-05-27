import styled from 'styled-components';

export const TagButton = styled.button<{ $selected: boolean }>`
  padding: 8px;
  border-radius: 10px;
  gap: 8px;
  border: none;
  cursor: pointer;
  background-color: ${({ $selected }) => ($selected ? '#80276C' : '#F8F8F8')};
  transition: background-color 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
`;
