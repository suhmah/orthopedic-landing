import styled from 'styled-components';

export const Wrapper = styled.section`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Viewport = styled.div`
  overflow: hidden;
  width: 100%;
`;

export const Track = styled.div<{ offset: number }>`
  display: flex;
  gap: 16px;
  transform: translateX(-${({ offset }) => offset}px);
  transition: transform 0.3s ease;
`;
export const NavArrow = styled.button<{ direction: 'left' | 'right'; disabled?: boolean }>`
  ${({ direction }) => (direction === 'left' ? 'left: -20px' : 'right: -20px')};
  transform: translateY(-50%);

  width: 40px;
  height: 40px;
  aspect-ratio: 1 / 1;

  display: flex;
  align-items: center;
  justify-content: center;

  background: white;
  border: none;
  border-radius: 50%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);

  font-size: 24px;
  line-height: 1;
  padding: 0;
  margin: 0;
  color: #4c4d4c;
  opacity: ${({ disabled }) => (disabled ? 0.3 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
`;
