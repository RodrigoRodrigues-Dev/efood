import styled from 'styled-components';
import colors from '../../styles/colors';
import { IoCloseSharp } from 'react-icons/io5';

export const ProductModalStyled = styled.div`
  z-index: 999;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  width: 1024px;
  padding: 32px;
  background-color: rgb(${colors.PrimaryColor1});
  color: rgb(${colors.BackGround});
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ImgFood = styled.img`
  width: 300px;
  margin-right: 24px;
`;

export const Overlay = styled.div`
  content: '';

  z-index: 99;
  position: absolute;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalBtn = styled.button`
  width: 250px;
  padding: 4px 8px;
  font-weight: 900;
  color: rgb(${colors.PrimaryColor1});
  background-color: rgb(${colors.PrimaryColor2});
  border: none;

  &:hover {
    cursor: pointer;
    background-color: rgb(${colors.PrimaryColor2}, 0.9);
  }
`;

export const CloseBtn = styled(IoCloseSharp as React.ComponentType)`
  position: absolute;
  font-size: 32px;
  top: 5px;
  right: 5px;

  &:hover {
    cursor: pointer;
    color: rgba(${colors.BackGround}, 0.8);
  }
`;
