import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: relative;
  width: 100%;
  height: 51px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 147px;
  background-color: white;
  z-index: 10;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 32px;
    width: auto;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 32px;
  align-items: center;

  a {
    text-decoration: none;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const MenuIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const MobileMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px 24px;

  a {
    text-decoration: none;
  }
`;

export const DesktopOnly = styled.div`
  display: flex;

  @media (max-width: 1200px) {
    display: none;
  }
`;

export const MobileOnly = styled.div`
  display: none;

  @media (max-width: 1200px) {
    display: block;
  }
`;
