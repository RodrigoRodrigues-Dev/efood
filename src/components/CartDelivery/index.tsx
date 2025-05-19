import { useFormik } from 'formik';
import * as Yup from 'yup';

import {
  DeliveryForm,
  DeliveryInput,
  AddressCep,
  DeliveryLabel,
  DeliveryTitle,
  DeliveryControls,
  CartDeliveryStyled,
  ErrorMessage // adicione aqui
} from './styles';

import { CartButton } from '../../containers/Cart/styles';

type DeliveryData = {
  receiver: string;
  address: {
    description: string;
    city: string;
    number: number;
    zipCode: string;
    complement: string;
  };
};

type Prop = {
  $isShowDelivery: boolean;
  setIsShowDelivery: React.Dispatch<React.SetStateAction<boolean>>;
  setIsShowCartPayment: React.Dispatch<React.SetStateAction<boolean>>;
  setDeliveryData: React.Dispatch<React.SetStateAction<null | DeliveryData>>;
};

const CartDelivery = ({
  $isShowDelivery,
  setIsShowDelivery,
  setIsShowCartPayment,
  setDeliveryData
}: Prop) => {
  const form = useFormik({
    initialValues: {
      receiver: '',
      address: '',
      city: '',
      cep: '',
      number: '',
      complement: ''
    },
    validationSchema: Yup.object().shape({
      receiver: Yup.string()
        .min(3, 'Mínimo de 3 caracteres')
        .max(50, 'Máximo de 50 caracteres')
        .required('Campo obrigatório'),
      address: Yup.string()
        .min(5, 'Mínimo de 5 caracteres')
        .max(100, 'Máximo de 100 caracteres')
        .required('Campo obrigatório'),
      city: Yup.string()
        .min(2, 'Mínimo de 2 caracteres')
        .max(50, 'Máximo de 50 caracteres')
        .required('Campo obrigatório'),
      cep: Yup.string()
        .matches(/^\d{8}$/, 'CEP deve conter exatamente 8 números')
        .required('Campo obrigatório'),
      number: Yup.string()
        .min(1, 'Mínimo de 1 caractere')
        .max(10, 'Máximo de 10 caracteres')
        .required('Campo obrigatório'),
      complement: Yup.string().max(100, 'Máximo de 100 caracteres')
    }),
    onSubmit: values => {
      const formattedDelivery = {
        receiver: values.receiver,
        address: {
          description: values.address,
          city: values.city,
          zipCode: values.cep,
          number: Number(values.number),
          complement: values.complement
        }
      };
      setDeliveryData(formattedDelivery);
      setIsShowCartPayment(true);
    }
  });

  return (
    <CartDeliveryStyled $isShowDelivery={$isShowDelivery}>
      <DeliveryTitle>Entrega</DeliveryTitle>
      <DeliveryForm onSubmit={form.handleSubmit}>
        <div>
          <DeliveryLabel htmlFor="receiver">Quem irá receber</DeliveryLabel>
          <DeliveryInput
            id="receiver"
            name="receiver"
            type="text"
            value={form.values.receiver}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          {form.touched.receiver && form.errors.receiver && (
            <ErrorMessage>{form.errors.receiver}</ErrorMessage>
          )}
        </div>

        <div>
          <DeliveryLabel htmlFor="address">Endereço</DeliveryLabel>
          <DeliveryInput
            id="address"
            name="address"
            type="text"
            value={form.values.address}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          {form.touched.address && form.errors.address && (
            <ErrorMessage>{form.errors.address}</ErrorMessage>
          )}
        </div>

        <div>
          <DeliveryLabel htmlFor="city">Cidade</DeliveryLabel>
          <DeliveryInput
            id="city"
            name="city"
            type="text"
            value={form.values.city}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          {form.touched.city && form.errors.city && (
            <ErrorMessage>{form.errors.city}</ErrorMessage>
          )}
        </div>

        <AddressCep>
          <div>
            <DeliveryLabel htmlFor="cep">CEP</DeliveryLabel>
            <DeliveryInput
              id="cep"
              name="cep"
              type="text"
              value={form.values.cep}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            {form.touched.cep && form.errors.cep && (
              <ErrorMessage>{form.errors.cep}</ErrorMessage>
            )}
          </div>

          <div>
            <DeliveryLabel htmlFor="number">Número</DeliveryLabel>
            <DeliveryInput
              id="number"
              name="number"
              type="text"
              value={form.values.number}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            {form.touched.number && form.errors.number && (
              <ErrorMessage>{form.errors.number}</ErrorMessage>
            )}
          </div>
        </AddressCep>

        <div>
          <DeliveryLabel htmlFor="complement">
            Complemento (opcional)
          </DeliveryLabel>
          <DeliveryInput
            id="complement"
            name="complement"
            type="text"
            value={form.values.complement}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          {form.touched.complement && form.errors.complement && (
            <ErrorMessage>{form.errors.complement}</ErrorMessage>
          )}
        </div>

        <DeliveryControls>
          <CartButton type="submit">Continuar com o pagamento</CartButton>
          <CartButton type="button" onClick={() => setIsShowDelivery(false)}>
            Voltar para o carrinho
          </CartButton>
        </DeliveryControls>
      </DeliveryForm>
    </CartDeliveryStyled>
  );
};

export default CartDelivery;
