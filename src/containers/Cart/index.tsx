import { useSelector, useDispatch } from 'react-redux';
import { cartClose } from '../../store/reducers/restaurantReducer';
import { RootState } from '../../store';

import CardProductCart from '../../components/CardProductCart';

import { CartStyled, CartButton, CartValue, CartProduts } from './styles';
import { Overlay } from '../../components/ProductModal/styles';
import { useState } from 'react';
import CartDelivery from '../../components/CartDelivery';
import CartPayment from '../../components/CartPayment';
import OrderCompleted from '../../components/OrderCompleted';

const Cart = () => {
  const dispatch = useDispatch();

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

  const [deliveryData, setDeliveryData] = useState<DeliveryData | null>(null);

  const productsCart = useSelector(
    (state: RootState) => state.restaurantState.cart
  );

  const idsEPrecos = productsCart.map(item => ({
    id: item.id,
    price: item.preco
  }));

  const totalValue = productsCart.reduce((acc, item) => {
    acc += item.preco;
    return acc;
  }, 0);

  const [isShowDelivery, setIsShowDelivery] = useState(false);
  const [isShowCartPayment, setIsShowCartPayment] = useState(false);
  const [isShowOrderCompleted, setIsOrderCompleted] = useState(false);

  const handleOrder = () => {
    if (productsCart.length > 0) {
      setIsShowDelivery(true);
    }
  };

  return (
    <>
      <CartStyled>
        <CartProduts>
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
          <CartButton onClick={() => handleOrder()}>
            Continuar com a entrega
          </CartButton>
        </CartProduts>

        <CartDelivery
          setDeliveryData={setDeliveryData}
          setIsShowDelivery={setIsShowDelivery}
          setIsShowCartPayment={setIsShowCartPayment}
          $isShowDelivery={isShowDelivery}
        />

        <CartPayment
          $products={idsEPrecos}
          $delivery={deliveryData}
          $isShowCartPayment={isShowCartPayment}
          setIsShowCartPayment={setIsShowCartPayment}
          setIsOrderCompleted={setIsOrderCompleted}
          $PurchaseValue={totalValue}
        />
        <OrderCompleted $isShowOrderCompleted={isShowOrderCompleted} />
      </CartStyled>
      <Overlay onClick={() => dispatch(cartClose())} />
    </>
  );
};

export default Cart;
