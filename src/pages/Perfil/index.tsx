import { useSelector } from 'react-redux';
import { RootState } from '../../store';

import HeaderPefil from '../../components/HeaderPerfil';
import HeroPerfil from '../../components/HeroPerfil';
import LayoutContainer from '../../components/LayoutContainer';
import CardProduct from '../../components/CardProduct';

import { ListProducts } from './styles';
import ProductModal from '../../components/ProductModal';

const Perfil = () => {
  const products = useSelector(
    (state: RootState) => state.restaurantState.restaurant?.cardapio
  );

  const modalIsVisible = useSelector(
    (state: RootState) => state.restaurantState.modalIsVisible
  );

  return (
    <>
      {modalIsVisible && <ProductModal />}
      <HeaderPefil />
      <HeroPerfil />
      <LayoutContainer>
        <ListProducts>
          {products?.map(item => (
            <CardProduct
              key={item.id}
              $id={item.id}
              $description={item.descricao}
              $img={item.foto}
              $name={item.nome}
            />
          ))}
        </ListProducts>
      </LayoutContainer>
    </>
  );
};

export default Perfil;
