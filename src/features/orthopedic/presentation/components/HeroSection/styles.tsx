import styled from 'styled-components';
import backgroundImage from '../../../../../assets/images/hero-orthopedic.png';

export const Container = styled.section`
  width: 100%;
  height: 617px;

  background-image: url(${backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const Overlay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 86px;
  max-width: 760px;
  width: 100%;
  height: 100%;
  position: relative;
`;

export const BreadcrumbWrapper = styled.div`
  position: absolute;
  top: 32px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const TitleSmall = styled.span`
  font-family: Raleway;
  font-size: 14px;
  letter-spacing: 4px;
  font-weight: 300;
  color: #4c4d4c;
  display: block;
`;

export const TitleHighlight = styled.h2`
  font-family: Raleway;
  font-size: 32px;
  font-weight: 700;
  color: #720f79;
  margin: 8px 0 24px 0;
`;

export const Description = styled.p`
  font-family: Raleway;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  color: #4c4d4c;
`;
export const LogoImage = styled.img`
  width: 300px;
  height: auto;
  margin-bottom: 24px;
`;
export const ListItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;

  &::before {
    content: '•';
    font-size: 24px;
    color: #121212;
    line-height: 30px;
    margin-top: 2px;
  }
`;
