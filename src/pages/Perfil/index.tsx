import HeaderPefil from '../../components/HeaderPerfil';
import HeroPerfil from '../../components/HeroPerfil';
import LayoutContainer from '../../components/LayoutContainer';
import CardProduct from '../../components/CardProduct';

import { ListProducts } from './styles';

const Perfil = () => {
  const product = {
    name: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    img: 'https://efood-images.vercel.app/food-images/image%203.png'
  };

  return (
    <>
      <HeaderPefil />
      <HeroPerfil />
      <LayoutContainer>
        <ListProducts>
          {[...Array(6)].map((_, idx) => (
            <CardProduct
              $description={product.description}
              $img={product.img}
              $name={product.name}
              key={idx}
            />
          ))}
        </ListProducts>
      </LayoutContainer>
    </>
  );
};

export default Perfil;
