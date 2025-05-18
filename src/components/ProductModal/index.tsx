import { useSelector, useDispatch } from 'react-redux';
import { modalClose, addCart } from '../../store/reducers/restaurantReducer';

import { RootState } from '../../store';

import {
  ProductModalStyled,
  ImgFood,
  Overlay,
  ModalBtn,
  ModalContent,
  CloseBtn
} from './styles';

const ProductModal = () => {
  const dispatch = useDispatch();

  const product = useSelector(
    (state: RootState) => state.restaurantState.modal
  );

  const handleCart = () => {
    dispatch(modalClose());
    dispatch(addCart(product?.id));
  };

  return (
    <>
      <ProductModalStyled>
        <div onClick={() => dispatch(modalClose())}>
          <CloseBtn />
        </div>
        <ImgFood src={product?.foto} />
        <ModalContent>
          <h1>{product?.nome}</h1>
          <p>{product?.descricao}</p>
          <span>{product?.porcao}</span>
          <ModalBtn onClick={() => handleCart()}>
            Adicionar ao carrinho - R${product?.preco}0
          </ModalBtn>
        </ModalContent>
      </ProductModalStyled>
      <Overlay onClick={() => dispatch(modalClose())} />
    </>
  );
};

export default ProductModal;
