import { Link } from 'react-router-dom';
import { HeaderPefilStyled, HeaderTexts, Logo } from './styles';

const HeaderPefil = () => {
  return (
    <HeaderPefilStyled>
      <Link to="/">
        <HeaderTexts>Restaurantes</HeaderTexts>
        <Logo src="https://efood-images.vercel.app/logo.png" alt="" />
      </Link>

      <HeaderTexts>0 produto(s) no carrinho</HeaderTexts>
    </HeaderPefilStyled>
  );
};

export default HeaderPefil;
