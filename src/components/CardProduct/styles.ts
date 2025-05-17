import styled from 'styled-components';
import colors from '../../styles/colors';

export const CardProductStyled = styled.div`
  padding: 8px;
  background-color: rgb(${colors.PrimaryColor1});
  color: rgb(${colors.BackGround});
`;

export const CardProductBtn = styled.button`
  width: 100%;
  font-weight: 700;
  padding: 4px 0;
  color: rgb(${colors.PrimaryColor1});
  background-color: rgb(${colors.PrimaryColor2});
  border: none;

  &:hover {
    cursor: pointer;
    background-color: rgb(${colors.PrimaryColor2}, 0.8);
  }
`;

export const Title = styled.h3`
  margin-top: 4px;
`;

export const Paragraph = styled.p`
  font-weight: 400px;
  padding: 12px 0;
  line-height: 22px;
`;
