import React from 'react';

// import SocialList from "src/components/UI/socialList";
import * as S from './styles';

const Footer = () => (
  <S.footerWrapper>
    <S.footerContainer>
      <S.firstRow>
        <S.presentationColumn>
          <S.presentationTitle>Tem perguntas,</S.presentationTitle>
          <S.presentationTitle>fale comigo.</S.presentationTitle>
          <S.presentationSubtitle>Respondo assim que puder.</S.presentationSubtitle>
        </S.presentationColumn>
        <S.infosColumn>
          <S.infosLabel>Para mandar um "Oi" 👋</S.infosLabel>
          <S.infosEmail>felipexperto@gmail.com</S.infosEmail>
        </S.infosColumn>
      </S.firstRow>
      <S.secondRow>
        <S.copyrightColumn>
          © {new Date().getFullYear()}, Construído com
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a> <S.emojiWrapper aria-label="Emoji de coração" role="img">❤</S.emojiWrapper>
        </S.copyrightColumn>
        <S.socialColumn>
          {/* <SocialList networkArr={socialArr} /> */}
        </S.socialColumn>
      </S.secondRow>
    </S.footerContainer>
  </S.footerWrapper>
)

export default Footer;