import styled from 'styled-components';
import colors from '../../styles/colors';
import { FaStar } from 'react-icons/fa';

export const CardRestaurantStyled = styled.div`
  position: relative;
  border: 1px solid rgb(${colors.PrimaryColor1});
`;

export const CardBtn = styled.button`
  padding: 4px 8px;
  color: rgb(${colors.BackGround});
  background-color: rgba(${colors.PrimaryColor1});
  border: none;

  &:hover {
    cursor: pointer;
    background-color: rgba(${colors.PrimaryColor1}, 0.7);
  }
`;

export const StarIcon = styled(FaStar as React.ComponentType)`
  color: rgb(${colors.PrimaryColor3});
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CardInfo = styled.div`
  padding: 8px;
`;

export const ImgFood = styled.img`
  height: 217px;
  width: 100%;
`;

export const Paragraph = styled.p`
  margin: 16px 0;
`;

export const Title = styled.h3`
  font-size: 18px;
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 18px;
  font-weight: 900;
`;

export const Tags = styled.ul`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
`;

export const Tag = styled.li`
  padding: 4px 8px;
  color: rgb(${colors.BackGround});
  background-color: rgba(${colors.PrimaryColor1});
`;
