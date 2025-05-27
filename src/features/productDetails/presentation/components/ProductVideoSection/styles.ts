import styled from 'styled-components';

export const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1194 / 663;
  align-self: center;
  border-radius: 12px;
  overflow: hidden;
  background-color: #000;

  margin-bottom: 10px;
`;

export const PlayButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);

  img {
    width: 20px;
    height: 20px;
  }
`;

export const StyledIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
`;

export const ThumbnailImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  object-fit: cover;
  border-radius: 12px;
`;

export const HighlightText = styled.span`
  color: #e57200;
  font-weight: 700;
`;

export const NoteText = styled.p`
  font-size: 12px;
  color: #707372;
  margin: 0;
`;
