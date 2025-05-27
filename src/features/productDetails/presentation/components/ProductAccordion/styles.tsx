import styled from 'styled-components';

export const AccordionWrapper = styled.div`
  width: 100%;
  border-top: 1px solid #dde3e5;
  cursor: pointer;
`;

export const Section = styled.div`
  padding: 0 24px;
  border-bottom: 1px solid #dde3e5;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: white;
  border: none;
  padding: 16px 0;
  cursor: pointer;
`;

export const Title = styled.p`
  font-weight: 500;
`;

export const Icon = styled.span<{ isOpen: boolean }>`
  font-size: 20px;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  transition: transform 0.2s ease;
`;

export const Content = styled.div<{ isOpen: boolean }>`
  display: flex;
  max-height: ${({ isOpen }) => (isOpen ? '1000px' : '0')};
  overflow: hidden;
  transition: max-height 0.3s ease;
  padding: ${({ isOpen }) => (isOpen ? '16px 0' : '0')};
`;
