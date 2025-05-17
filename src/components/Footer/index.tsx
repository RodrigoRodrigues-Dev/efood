import { Link } from 'react-router-dom';

import {
  FooterStyled,
  InstagramLogo,
  FacebookLogo,
  TwitterLogo,
  SocialLink,
  SocialList,
  Text
} from './styles';

const Footer = () => (
  <FooterStyled>
    <Link to="/">
      <img src="https://efood-images.vercel.app/logo.png" alt="" />
    </Link>
    <SocialList>
      <SocialLink>
        <InstagramLogo />
      </SocialLink>
      <SocialLink>
        <FacebookLogo />
      </SocialLink>
      <SocialLink>
        <TwitterLogo />
      </SocialLink>
    </SocialList>
    <Text>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </Text>
  </FooterStyled>
);

export default Footer;
