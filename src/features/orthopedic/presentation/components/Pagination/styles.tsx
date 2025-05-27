import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 24px;
`;

interface PageButtonProps {
  active?: boolean;
}

export const PageButton = styled.button<PageButtonProps>`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  padding: 0;
  margin: 0;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  font-size: 14px;
  line-height: 1;
  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
  color: #707372;
  background-color: white;
  box-sizing: border-box;

  box-shadow: ${({ active }) => (active ? '0px 0px 4px 0px #707372' : 'none')};

  cursor: pointer;

  &:hover {
    background-color: #eee;
  }

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.4;
      cursor: not-allowed;
    `}
`;
export const Ellipsis = styled.span`
  padding: 6px 10px;
  color: #999;
`;
