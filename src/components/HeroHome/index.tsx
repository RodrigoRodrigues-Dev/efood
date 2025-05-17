import { Link } from 'react-router-dom';

import { HeroHomeStyled, Title } from './styles';

const HeroHome = () => (
  <HeroHomeStyled>
    <Link to="/">
      <img src="https://efood-images.vercel.app/logo.png" alt="" />
    </Link>
    <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
  </HeroHomeStyled>
);

export default HeroHome;
