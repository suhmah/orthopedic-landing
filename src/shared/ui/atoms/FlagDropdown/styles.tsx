import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 40px;
  height: 24px;
  border-radius: 4px;
  padding: 0 4px;
  background-color: white;
  overflow: hidden;
`;

export const FlagIcon = styled.img`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`;

export const ArrowIcon = styled.img`
  width: 8px;
  height: 6.33px;
  margin: 0 4px;
  flex-shrink: 0;
`;

export const Select = styled.select`
  border: none;
  background: transparent;
  font-size: 12px;
  padding: 0;
  width: 100%;
  outline: none;
  cursor: pointer;
  appearance: none;
`;
