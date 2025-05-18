import styled from 'styled-components';
import colors from '../../styles/colors';

export const HeaderPefilStyled = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 65px 171px;
  background-image: url('https://efood-images.vercel.app/fundo.png');
`;

export const HeaderTexts = styled.p`
  font-size: 18px;
  font-weight: 900;
  color: rgb(${colors.PrimaryColor1});

  &:hover {
    cursor: pointer;
    color: rgb(${colors.PrimaryColor1}, 0.8);
  }
`;

export const Logo = styled.img`
  width: 120px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
