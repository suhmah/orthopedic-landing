import styled from 'styled-components';

export const ImageCounter = styled.div`
  margin-top: 8px;
  font-size: 12px;
  color: #555;
`;

export const CarouselContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Viewport = styled.div`
  flex: 1;
  overflow: hidden;
`;

export const ThumbnailsTrack = styled.div<{ offset: number }>`
  display: flex;
  gap: 8px;
  transform: translateX(-${({ offset }) => offset}px);
  transition: transform 0.3s ease;
`;

export const ThumbnailImage = styled.img<{ selected: boolean }>`
  width: 60px;
  height: 60px;
  border-radius: 8px;
  border: 2px solid ${({ selected }) => (selected ? '#007BFF' : 'transparent')};
  opacity: ${({ selected }) => (selected ? 1 : 0.6)};
  cursor: pointer;
  object-fit: cover;
`;

export const NavArrow = styled.div<{ position: 'left' | 'right'; disabled?: boolean }>`
  border: none;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  padding: 4px 10px;
  color: #d5d7d8;
`;
