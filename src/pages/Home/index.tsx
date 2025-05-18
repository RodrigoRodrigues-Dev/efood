import HeroHome from '../../components/HeroHome';
import CardRestaurant from '../../components/CardRestaurant';
import { useGetRestaurantsQuery } from '../../services/api';

import { RestaurantList } from './styles';
import LayoutContainer from '../../components/LayoutContainer';

const Home = () => {
  const { data: restaurants } = useGetRestaurantsQuery();

  console.log(restaurants);

  return (
    <>
      <HeroHome />
      <LayoutContainer>
        <RestaurantList>
          {restaurants?.map(item => (
            <CardRestaurant
              key={item.id}
              $name={item.titulo}
              $img={item.capa}
              $rating={item.avaliacao}
              $description={item.descricao}
              $tags={item.tipo}
              $cardapio={item.cardapio}
            />
          ))}
        </RestaurantList>
      </LayoutContainer>
    </>
  );
};

export default Home;
