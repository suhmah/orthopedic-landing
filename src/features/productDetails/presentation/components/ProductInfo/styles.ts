import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Title = styled.h1`
  font-size: 28px;
  color: #701d91;
`;

export const Subtitle = styled.h2`
  font-size: 16px;
  color: #999;
`;

export const InfoText = styled.p`
  font-size: 14px;
  color: #444;
`;

export const Label = styled.span`
  font-weight: bold;
  margin-top: 8px;

  color: #121212;
`;

export const Description = styled.p`
  font-size: 14px;
  line-height: 1.5;

  color: #4c4d4c;
`;

export const HighlightText = styled.p`
  color: #cc0000;
  font-weight: bold;
`;

interface ElipseProps {
  color: string;
}

export const Elipse = styled.div<ElipseProps>`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
`;

export const Tag = styled.span`
  width: 60px;
  height: 22px;
  padding: 2 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  border-radius: 4px;
  background-color: #ebebeb;

  gap: 8px;
`;
