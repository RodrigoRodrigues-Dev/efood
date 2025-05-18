import styled from 'styled-components';
import colors from '../../styles/colors';

export const CartStyled = styled.div`
  overflow-y: scroll;
  z-index: 999;
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: rgb(${colors.PrimaryColor1});
  color: rgb(${colors.BackGround});
  padding: 32px 8px;
  height: 100vh;
  right: 0;
`;

export const CartButton = styled.button`
  border: none;
  padding: 4px;
  background-color: rgb(${colors.PrimaryColor2});
  color: rgb(${colors.PrimaryColor1});
  font-weight: 900;

  &:hover {
    cursor: pointer;
    background-color: rgba(${colors.PrimaryColor2}, 0.8);
  }
`;

export const CartValue = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
