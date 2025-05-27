import styled from 'styled-components';

export const CardContainer = styled.div<{ small?: boolean }>`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  gap: 8px;
  cursor: pointer;

  width: ${({ small }) => (small ? '180px' : '268px')};
  min-width: ${({ small }) => (small ? '180px' : '268px')};
  height: ${({ small }) => (small ? '280px' : '398px')};

  &:hover {
    transform: translateY(-4px);
  }
`;

export const Image = styled.div<{ image: string; small?: boolean }>`
  width: 100%;
  height: ${({ small }) => (small ? '220px' : '338px')};
  padding: 8px;
  border-radius: 8px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
`;

export const Label = styled.span`
  align-self: flex-start;
  background-color: #9a1a8099;
  color: #ffffff;
  font-size: 10px;
  font-weight: 700;
  border-radius: 8px;
  padding: 8px;
  opacity: 0.6;
`;

export const CodeWrapper = styled.div`
  display: flex;
  gap: 4px;
  align-items: baseline;
`;
