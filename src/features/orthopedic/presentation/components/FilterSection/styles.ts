import styled from 'styled-components';

export const Container = styled.div`
  width: 306px;
  background-color: #ffffff;
  border-radius: 10px;
  border: 1px solid #dadada;

  flex-direction: column;
`;

export const WrappetText = styled.div`
  border-top: 1px solid #eee;
  padding: 24px 16px;
  cursor: pointer;
  gap: 12px;
`;
export const FilterGroup = styled.div`
  border-top: 1px solid #eee;
  padding: 32px 16px;
  cursor: pointer;
  background-color: #f8f8f8;
  gap: 12px;
`;

export const FilterHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DropdownContent = styled.div`
  margin-top: 8px;
  padding-left: 8px;
  display: flex;
  flex-direction: column;
  gap: 6px;

  label {
    font-size: 14px;
    color: #444;
    display: flex;
    align-items: center;
    gap: 4px;
  }
`;

export const Arrow = styled.span<{ isOpen: boolean }>`
  font-size: 12px;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  transition: transform 0.2s ease;
`;
