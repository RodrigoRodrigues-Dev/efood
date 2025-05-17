import { useDispatch } from 'react-redux';
import { addRestaurant } from '../../store/reducers/restaurantReducer';
import { Link } from 'react-router-dom';

import {
  CardRestaurantStyled,
  CardBtn,
  ImgFood,
  CardInfo,
  CardHeader,
  StarIcon,
  Paragraph,
  Rating,
  Title,
  Tag,
  Tags
} from './styles';

type Props = {
  $name: string;
  $rating: string;
  $img: string;
  $description: string;
  $tags: string[];
};

const CardRestaurant = ({
  $name,
  $rating,
  $description,
  $tags,
  $img
}: Props) => {
  const restaurant = {
    name: $name,
    rating: $rating,
    description: $description,
    tags: $tags,
    img: $img
  };

  const dispatch = useDispatch();

  const handleRestaurant = () => {
    dispatch(addRestaurant(restaurant));
  };

  return (
    <CardRestaurantStyled>
      <Tags>
        {$tags.map((item, key) => (
          <Tag key={key}>{item}</Tag>
        ))}
      </Tags>
      <ImgFood src={$img} />
      <CardInfo>
        <CardHeader>
          <Title>{$name}</Title>
          <Rating>
            {$rating} <StarIcon />
          </Rating>
        </CardHeader>
        <Paragraph>{$description}</Paragraph>
        <Link to={`/perfil/${$name}`} onClick={handleRestaurant}>
          <CardBtn>Saiba Mais</CardBtn>
        </Link>
      </CardInfo>
    </CardRestaurantStyled>
  );
};

export default CardRestaurant;
