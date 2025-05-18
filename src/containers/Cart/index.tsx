import { useSelector, useDispatch } from 'react-redux';
import { cartClose } from '../../store/reducers/restaurantReducer';
import { RootState } from '../../store';

import CardProductCart from '../../components/CardProductCart';

import { CartStyled, CartButton, CartValue } from './styles';
import { Overlay } from '../../components/ProductModal/styles';

const Cart = () => {
  const dispatch = useDispatch();

  const productsCart = useSelector(
    (state: RootState) => state.restaurantState.cart
  );

  const totalValue = productsCart.reduce((acc, item) => {
    acc += item.preco;
    return acc;
  }, 0);

  return (
    <>
      <CartStyled>
        {productsCart.map(item => (
          <CardProductCart
            key={item.id}
            $id={item.id}
            $img={item.foto}
            $name={item.nome}
            $price={item.preco}
          />
        ))}

        <CartValue>
          <span>Valor total</span> <span>R${totalValue.toFixed(1)}0</span>
        </CartValue>
        <CartButton>Continuar com a entrega</CartButton>
      </CartStyled>
      <Overlay onClick={() => dispatch(cartClose())} />
    </>
  );
};

export default Cart;
