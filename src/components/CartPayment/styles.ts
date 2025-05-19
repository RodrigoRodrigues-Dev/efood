import styled from 'styled-components';
import colors from '../../styles/colors';

type Props = {
  $isShowCartPayment: boolean;
};

export const CartPaymentStyled = styled.div<Props>`
  width: 350px;
  position: absolute;
  top: 0;
  left: ${({ $isShowCartPayment }) => ($isShowCartPayment ? '0' : '100%')};
  transition: all ease-in 0.3s;
  height: 100vh;
  padding: 32px 8px;
  background-color: rgb(${colors.PrimaryColor1});
`;

export const CartPaymentForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const CartPaymentTitle = styled.h4`
  font-weight: 700;
  margin-bottom: 16px;
`;

export const CartPaymentInput = styled.input`
  border: none;
  background-color: rgb(${colors.PrimaryColor2});
  margin-top: 8px;
  padding: 8px;
  width: 100%;
`;

export const PaymentInputs = styled.div`
  display: flex;
  gap: 34px;
`;

export const CartPaymentLabel = styled.label`
  font-weight: 700;
`;

export const CartPaymentControls = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ErrorMessage = styled.small`
  color: red;
  font-size: 12px;
  margin-top: 4px;
  display: block;
`;
