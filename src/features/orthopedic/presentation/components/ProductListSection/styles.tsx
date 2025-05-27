import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  padding: 64px 0;
  position: relative;

  @media (max-width: 800px) {
    flex-direction: column;
  }

  .filters-desktop {
    display: block;

    @media (max-width: 800px) {
      display: none;
    }
  }
`;
export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 268px);
  gap: 30px;
  justify-content: center;
`;
export const MobileHeader = styled.div`
  display: none;

  @media (max-width: 800px) {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 12px;
    padding: 0 16px 16px;
  }
`;

export const SearchWrapper = styled.div`
  background-color: #f3f3f3;
  padding: 8px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FilterButton = styled.button`
  background-color: #f3f3f3;
  padding: 8px;
  border-radius: 50%;
  border: none;
  cursor: pointer;

  img {
    width: 24px;
    height: 24px;
  }
`;

export const Sidebar = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 80%;
  max-width: 360px;
  height: 100vh;
  background: white;
  z-index: 1000;
  padding: 24px;
  box-shadow: 0px 0px 4px #707372;
  animation: slideIn 0.3s ease forwards;
  display: flex;
  justify-content: center;

  @keyframes slideIn {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  z-index: 999;
`;
