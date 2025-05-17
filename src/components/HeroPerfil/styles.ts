import styled from 'styled-components';
import colors from '../../styles/colors';

type Prop = {
  $img: string | undefined;
};

export const HeroPerfilStyled = styled.div<Prop>`
  z-index: 1;
  position: relative;
  background-image: url(${({ $img }) => $img});
  height: 280px;
  background-repeat: no-repeat;
  background-size: cover;
  color: rgb(${colors.BackGround});
  background-position: 0px;
  padding: 32px 170px;

  &::after {
    z-index: -1;
    content: '';

    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export const Infos = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 900;
`;

export const Tag = styled.span`
  font-weight: 100;
  font-size: 32px;
`;
