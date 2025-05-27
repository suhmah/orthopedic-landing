import styled from 'styled-components';

export const Container = styled.footer`
  background-color: #3d3d3d;
  color: white;
  padding: 40px 60px 20px;
  font-size: 14px;
  display: flex;
  flex-direction: column;
`;

export const TopSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: start;
  gap: 40px;
  @media (max-width: 800px) {
    flex-direction: column;
    padding: 24px;
    height: auto;
    gap: 16px;
  }
`;

export const Column = styled.div`
  min-width: 160px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Item = styled.span`
  color: #ccc;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const Logo = styled.img`
  width: 100px;
  height: auto;
  object-fit: contain;
`;

export const BottomSection = styled.div`
  margin-top: 40px;
  border-top: 1px solid #555;
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  color: #aaa;
`;

export const CountrySelector = styled.div`
  margin-bottom: 8px;
  color: #9aff65;
`;

export const Copyright = styled.div`
  text-align: right;
  line-height: 1.5;
`;
export const ContactRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Icon = styled.img<{ size?: number }>`
  width: ${({ size }) => size ?? 18}px;
  height: ${({ size }) => size ?? 18}px;
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 12px;
`;
