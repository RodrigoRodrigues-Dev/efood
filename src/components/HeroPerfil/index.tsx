import { useSelector } from 'react-redux';
import { RootState } from '../../store';

import { HeroPerfilStyled, Infos, Title, Tag } from './styles';

const HeroPerfil = () => {
  const restaurantInfos = useSelector(
    (state: RootState) => state.restaurantState.restaurant
  );

  return (
    <HeroPerfilStyled $img={restaurantInfos?.img}>
      <Infos>
        <Tag>
          {(() => {
            const tags = restaurantInfos?.tags;
            if (!Array.isArray(tags) || tags.length === 0) return null;
            return tags.length > 1 ? tags[1] : tags[0];
          })()}
        </Tag>
        <Title>{restaurantInfos?.name}</Title>
      </Infos>
    </HeroPerfilStyled>
  );
};

export default HeroPerfil;
