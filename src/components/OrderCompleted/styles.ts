import styled from 'styled-components';
import colors from '../../styles/colors';

type Props = {
  $isShowOrderCompleted: boolean;
};

export const OrderCompletedStyled = styled.div<Props>`
  width: 350px;
  position: absolute;
  top: 0;
  left: ${({ $isShowOrderCompleted }) =>
    $isShowOrderCompleted ? '0' : '100%'};
  transition: all ease-in 0.3s;
  height: 100vh;
  padding: 32px 8px;
  background-color: rgb(${colors.PrimaryColor1});
`;

export const OrderCompletedTitle = styled.h4`
  font-weight: 700;
  margin-bottom: 16px;
`;

export const OrderCompletedControls = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Paragraph = styled.p`
  line-height: 22px;
`;
