import styled from 'styled-components';
import colors from '../../styles/colors';
import { RiDeleteBin6Line } from 'react-icons/ri';

export const CardProductCartStyled = styled.div`
  background-color: rgb(${colors.PrimaryColor2});
  color: rgb(${colors.PrimaryColor1});
  display: flex;
  padding: 12px 8px;
  position: relative;
`;

export const CardImg = styled.img`
  width: 100px;
  margin-right: 8px;
`;

export const CardInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 40px;
`;

export const DeleteBtn = styled(RiDeleteBin6Line as React.ComponentType)`
  position: absolute;
  bottom: 5px;
  right: 5px;

  &:hover {
    cursor: pointer;
  }
`;
