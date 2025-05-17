import { CardProductStyled, CardProductBtn, Title, Paragraph } from './styles';

type Props = {
  $img: string;
  $name: string;
  $description: string;
  $price?: string;
  $servingsRange?: string;
};

const CardProduct = ({ $description, $img, $name }: Props) => {
  return (
    <CardProductStyled>
      <img src={$img} alt="" />
      <Title>{$name}</Title>
      <Paragraph>{$description}</Paragraph>
      <CardProductBtn>Adicionar ao carrinho</CardProductBtn>
    </CardProductStyled>
  );
};

export default CardProduct;
