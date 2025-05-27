import styled from 'styled-components';

export const SearchWrapper = styled.div<{ open: boolean }>`
  display: flex;
  align-items: center;
  transition: width 0.3s ease;
  width: ${({ open }) => (open ? '220px' : '40px')};
  background: white;
  overflow: hidden;
`;

export const InputWrapper = styled.div`
  border: 1px solid red;
  border-radius: 20px;

  display: flex;
  width: 100%;
  padding: 8px;
`;

export const Input = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: 14px;
  background: transparent;
  color: #121212;
`;

export const IconButton = styled.div`
  flex: 1;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
