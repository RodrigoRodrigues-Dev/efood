import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { cartOpen } from '../../store/reducers/restaurantReducer';
import { RootState } from '../../store';
import { HeaderPefilStyled, HeaderTexts, Logo } from './styles';

const HeaderPefil = () => {
  const dispatch = useDispatch();

  const cartProducts = useSelector(
    (state: RootState) => state.restaurantState.cart
  );

  return (
    <HeaderPefilStyled>
      <Link to="/">
        <HeaderTexts>Restaurantes</HeaderTexts>
        <Logo src="https://efood-images.vercel.app/logo.png" alt="" />
      </Link>

      <HeaderTexts onClick={() => dispatch(cartOpen())}>
        {cartProducts.length} produto(s) no carrinho
      </HeaderTexts>
    </HeaderPefilStyled>
  );
};

export default HeaderPefil;
