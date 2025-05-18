import { useDispatch } from 'react-redux';
import { deleteItemCart } from '../../store/reducers/restaurantReducer';

import { CardProductCartStyled, CardImg, CardInfos, DeleteBtn } from './styles';

type Props = {
  $id: number;
  $name: string;
  $img: string;
  $price: number;
};

const CardProductCart = ({ $img, $name, $price, $id }: Props) => {
  const dispatch = useDispatch();

  return (
    <CardProductCartStyled>
      <CardImg src={$img} />
      <CardInfos>
        <h4>{$name}</h4>
        <span>R${$price}0</span>
      </CardInfos>
      <div onClick={() => dispatch(deleteItemCart($id))}>
        <DeleteBtn />
      </div>
    </CardProductCartStyled>
  );
};

export default CardProductCart;
