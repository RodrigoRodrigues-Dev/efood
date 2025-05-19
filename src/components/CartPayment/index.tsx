import { useFormik } from 'formik';
import * as Yup from 'yup';

import { useDispatch } from 'react-redux';
import { resetCart, setPedidoID } from '../../store/reducers/restaurantReducer';

import {
  CartPaymentForm,
  CartPaymentInput,
  PaymentInputs,
  CartPaymentLabel,
  CartPaymentTitle,
  CartPaymentControls,
  CartPaymentStyled,
  ErrorMessage
} from './styles';

import { CartButton } from '../../containers/Cart/styles';
import React from 'react';
import { usePurchaseMutation } from '../../services/api';

type DeliveryData = {
  receiver: string;
  address: {
    description: string;
    city: string;
    zipCode: string;
    number: number;
    complement: string;
  };
};

type Prop = {
  $products: { id: number; price: number }[];
  $delivery: DeliveryData | null;
  $isShowCartPayment: boolean;
  $PurchaseValue: number;
  setIsShowCartPayment: React.Dispatch<React.SetStateAction<boolean>>;
  setIsOrderCompleted: React.Dispatch<React.SetStateAction<boolean>>;
};

const CartPayment = ({
  $isShowCartPayment,
  $delivery,
  $products,
  setIsShowCartPayment,
  setIsOrderCompleted,
  $PurchaseValue
}: Prop) => {
  const dispatch = useDispatch();

  const [purchase] = usePurchaseMutation();

  const form = useFormik({
    initialValues: {
      cardName: '',
      cardNumber: '',
      cvv: '',
      expMonth: '',
      expYear: ''
    },
    validationSchema: Yup.object().shape({
      cardName: Yup.string()
        .min(3, 'Mínimo de 3 caracteres')
        .max(50, 'Máximo de 50 caracteres')
        .required('Campo obrigatório'),
      cardNumber: Yup.string()
        .matches(/^\d{16}$/, 'Número deve conter 16 dígitos')
        .required('Campo obrigatório'),
      cvv: Yup.string()
        .matches(/^\d{3}$/, 'CVV deve conter 3 dígitos')
        .required('Campo obrigatório'),
      expMonth: Yup.string()
        .matches(/^(0[1-9]|1[0-2])$/, 'Mês inválido')
        .required('Campo obrigatório'),
      expYear: Yup.string()
        .matches(/^\d{2}$/, 'Ano inválido (ex: 25)')
        .required('Campo obrigatório')
    }),
    onSubmit: async values => {
      const formattedPayment = {
        card: {
          name: values.cardName,
          number: values.cardNumber,
          code: Number(values.cvv),
          expires: {
            month: Number(values.expMonth),
            year: Number(values.expYear)
          }
        }
      };

      try {
        const result = await purchase({
          products: $products,
          delivery: $delivery!,
          payment: formattedPayment
        }).unwrap();

        dispatch(setPedidoID(result.orderId));
        setIsOrderCompleted(true);
        dispatch(resetCart());
      } catch (err) {
        console.error('Erro ao finalizar pedido:', err);
      }
    }
  });

  return (
    <CartPaymentStyled $isShowCartPayment={$isShowCartPayment}>
      <CartPaymentTitle>
        Pagamento - valor a pagar R$ {$PurchaseValue.toFixed(1)}0
      </CartPaymentTitle>
      <CartPaymentForm onSubmit={form.handleSubmit}>
        <div>
          <CartPaymentLabel htmlFor="cardName">Nome no cartão</CartPaymentLabel>
          <CartPaymentInput
            id="cardName"
            name="cardName"
            type="text"
            value={form.values.cardName}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          {form.touched.cardName && form.errors.cardName && (
            <ErrorMessage>{form.errors.cardName}</ErrorMessage>
          )}
        </div>

        <PaymentInputs>
          <div>
            <CartPaymentLabel htmlFor="cardNumber">
              Número do cartão
            </CartPaymentLabel>
            <CartPaymentInput
              id="cardNumber"
              name="cardNumber"
              type="text"
              value={form.values.cardNumber}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            {form.touched.cardNumber && form.errors.cardNumber && (
              <ErrorMessage>{form.errors.cardNumber}</ErrorMessage>
            )}
          </div>
          <div>
            <CartPaymentLabel htmlFor="cvv">CVV</CartPaymentLabel>
            <CartPaymentInput
              id="cvv"
              name="cvv"
              type="text"
              value={form.values.cvv}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            {form.touched.cvv && form.errors.cvv && (
              <ErrorMessage>{form.errors.cvv}</ErrorMessage>
            )}
          </div>
        </PaymentInputs>

        <PaymentInputs>
          <div>
            <CartPaymentLabel htmlFor="expMonth">
              Mês de vencimento
            </CartPaymentLabel>
            <CartPaymentInput
              id="expMonth"
              name="expMonth"
              type="text"
              value={form.values.expMonth}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            {form.touched.expMonth && form.errors.expMonth && (
              <ErrorMessage>{form.errors.expMonth}</ErrorMessage>
            )}
          </div>
          <div>
            <CartPaymentLabel htmlFor="expYear">
              Ano de vencimento
            </CartPaymentLabel>
            <CartPaymentInput
              id="expYear"
              name="expYear"
              type="text"
              value={form.values.expYear}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            {form.touched.expYear && form.errors.expYear && (
              <ErrorMessage>{form.errors.expYear}</ErrorMessage>
            )}
          </div>
        </PaymentInputs>

        <CartPaymentControls>
          <CartButton type="submit">Finalizar pagamento</CartButton>
          <CartButton type="button" onClick={() => setIsShowCartPayment(false)}>
            Voltar para a edição de endereço
          </CartButton>
        </CartPaymentControls>
      </CartPaymentForm>
    </CartPaymentStyled>
  );
};

export default CartPayment;
