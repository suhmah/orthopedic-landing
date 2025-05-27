import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  max-width: 684px;
`;
export const MainImage = styled.div`
  width: 100%;
  max-width: 684px;
  border: 1px solid #d5d7d8;
  border-radius: 12px;
  overflow: hidden;
  aspect-ratio: 684 / 523;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  @media (max-width: 800px) {
    aspect-ratio: 4 / 3;
    max-width: 100%;
  }

  @media (max-width: 500px) {
    aspect-ratio: 1 / 1;
  }
`;

export const ThumbnailList = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
`;

export const Thumbnail = styled.button<{ isActive: boolean }>`
  border: 2px solid ${({ isActive }) => (isActive ? '#0066cc' : 'transparent')};
  border-radius: 8px;
  padding: 2px;
  background: transparent;
  cursor: pointer;
  img {
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 6px;
    display: block;
  }
  transition: border 0.3s ease;
`;
