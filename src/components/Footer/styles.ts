import styled, { css } from 'styled-components';
import colors from '../../styles/colors';
import { TiSocialFacebook } from 'react-icons/ti';
import { ImInstagram } from 'react-icons/im';
import { FaTwitter } from 'react-icons/fa';

export const FooterStyled = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
  margin-top: 120px;
  background-color: rgb(${colors.PrimaryColor2});
`;

const stylesLogos = css`
  color: rgb(${colors.PrimaryColor2});
  font-size: 12px;
`;

export const InstagramLogo = styled(ImInstagram as React.ComponentType)`
  ${stylesLogos}
`;

export const FacebookLogo = styled(TiSocialFacebook as React.ComponentType)`
  ${stylesLogos}
`;

export const TwitterLogo = styled(FaTwitter as React.ComponentType)`
  ${stylesLogos}
`;

export const SocialList = styled.ul`
  display: flex;
  gap: 8px;
`;

export const SocialLink = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  height: 24px;
  width: 24px;
  margin: 32px 0 80px 0;
  background-color: rgb(${colors.PrimaryColor1});

  &:hover {
    cursor: pointer;
    background-color: rgba(${colors.PrimaryColor1}, 0.7);
  }
`;

export const Text = styled.p`
  text-align: center;
  width: 680px;
`;
