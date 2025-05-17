import HeroHome from '../../components/HeroHome';
import CardRestaurant from '../../components/CardRestaurant';

import { RestaurantList } from './styles';
import LayoutContainer from '../../components/LayoutContainer';

const Home = () => {
  const restaurant1 = {
    name: 'Hioki Sushi',
    rating: '4.9',
    img: 'https://efood-images.vercel.app/food-images/image.png',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    tags: ['Destaque da semana', 'Japonesa']
  };

  const restaurant2 = {
    name: 'La Dolce Vita Trattoria',
    rating: '4.6',
    img: 'https://efood-images.vercel.app/food-images/image%201.png',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    tags: ['Italiana']
  };

  const restaurants = [restaurant1, ...Array(5).fill(restaurant2)];

  return (
    <>
      <HeroHome />
      <LayoutContainer>
        <RestaurantList>
          {restaurants.map((item, key) => (
            <CardRestaurant
              key={key}
              $name={item.name}
              $img={item.img}
              $rating={item.rating}
              $description={item.description}
              $tags={item.tags}
            />
          ))}
        </RestaurantList>
      </LayoutContainer>
    </>
  );
};

export default Home;
