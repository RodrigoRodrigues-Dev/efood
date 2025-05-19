import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { cartClose } from '../../store/reducers/restaurantReducer';

import {
  OrderCompletedTitle,
  OrderCompletedControls,
  OrderCompletedStyled,
  Paragraph,
  Text
} from './styles';

import { CartButton } from '../../containers/Cart/styles';

type Prop = {
  $isShowOrderCompleted: boolean;
};

const OrderCompleted = ({ $isShowOrderCompleted }: Prop) => {
  const dispatch = useDispatch();

  const idPedido = useSelector(
    (state: RootState) => state.restaurantState.idPedido
  );

  return (
    <OrderCompletedStyled $isShowOrderCompleted={$isShowOrderCompleted}>
      <OrderCompletedTitle>Pedido realizado - {idPedido}</OrderCompletedTitle>
      <Text>
        <Paragraph>
          Estamos felizes em informar que seu pedido já está em processo de
          preparação e, em breve, será entregue no endereço fornecido.
        </Paragraph>
        <Paragraph>
          Gostaríamos de ressaltar que nossos entregadores não estão autorizados
          a realizar cobranças extras.
        </Paragraph>
        <Paragraph>
          Lembre-se da importância de higienizar as mãos após o recebimento do
          pedido, garantindo assim sua segurança e bem-estar durante a refeição.
        </Paragraph>
        <Paragraph>
          Esperamos que desfrute de uma deliciosa e agradável experiência
          gastronômica. Bom apetite!
        </Paragraph>
      </Text>
      <OrderCompletedControls>
        <CartButton onClick={() => dispatch(cartClose())}>Concluir</CartButton>
      </OrderCompletedControls>
    </OrderCompletedStyled>
  );
};

export default OrderCompleted;
