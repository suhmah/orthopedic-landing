import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px 86px;

  @media (max-width: 800px) {
    padding: 16px;
  }
`;
export const Left = styled.div`
  width: 684px;
  flex-shrink: 0;
`;

export const Right = styled.div`
  flex: 1;
  min-width: 300px;
`;
