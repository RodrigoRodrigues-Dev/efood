import { useDispatch } from 'react-redux';
import { setModal } from '../../store/reducers/restaurantReducer';
import { modalOpen } from '../../store/reducers/restaurantReducer';

import {
  CardProductStyled,
  CardProductBtn,
  Title,
  Paragraph,
  ImgFood
} from './styles';

type Props = {
  $id: number;
  $img: string;
  $name: string;
  $description: string;
  $price?: string;
  $servingsRange?: string;
};

const CardProduct = ({ $description, $img, $name, $id }: Props) => {
  const dispatch = useDispatch();

  const limitDescription = (description: string) => {
    return description.slice(0, 90);
  };

  const handleModal = () => {
    dispatch(setModal($id));
    dispatch(modalOpen());
  };

  return (
    <CardProductStyled>
      <ImgFood src={$img} alt="" />
      <Title>{$name}</Title>
      <Paragraph>{`${limitDescription($description)}...`}</Paragraph>
      <CardProductBtn onClick={() => handleModal()}>
        Adicionar ao carrinho
      </CardProductBtn>
    </CardProductStyled>
  );
};

export default CardProduct;
