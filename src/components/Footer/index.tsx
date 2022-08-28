import React from 'react';
import { 
  Instagram, 
  Facebook, 
  Tiktok, 
  Youtube, 
  PaymentMehod, 
  Selo1, 
  Selo2 

} from '../../assets/Icons';

import {
  StyledFooterWrapper,
  StyledTitle,
  StyledItemsVerticalBox,
  StyledText,
  StyledFooterBoxWrapper,
  StyledSocialNetworksWrapper,
  StyledItemsHorizontalBox

} from './styles';

export const Footer: React.FC = () => {
  return (
    <StyledFooterWrapper>
      <StyledSocialNetworksWrapper>
        <Instagram />
        <Facebook />
        <Tiktok />
        <Youtube />
      </StyledSocialNetworksWrapper>
      <StyledFooterBoxWrapper>
        <StyledTitle>Atendimento ao cliente</StyledTitle>
        <StyledItemsVerticalBox>
          <StyledText>Ajuda</StyledText>
          <StyledText>Entre em contato</StyledText>
          <StyledText>Minha conta</StyledText>
          <StyledText>Meus pedidos</StyledText>
        </StyledItemsVerticalBox>
      </StyledFooterBoxWrapper>
      <StyledFooterBoxWrapper>
        <StyledTitle>Entrega e reembolsos</StyledTitle>
        <StyledItemsVerticalBox>
          <StyledText>Entregas</StyledText>
          <StyledText>Entregas e prazos</StyledText>
          <StyledText>Pedidos, preços e pagamento</StyledText>
          <StyledText>Retornos e reembolsos</StyledText>
        </StyledItemsVerticalBox>
      </StyledFooterBoxWrapper>
      <StyledFooterBoxWrapper>
        <StyledTitle>Políticas</StyledTitle>
        <StyledItemsVerticalBox>
          <StyledText>Termos e condições</StyledText>
          <StyledText>Política de Cookies</StyledText>
          <StyledText>Pagamentos</StyledText>
        </StyledItemsVerticalBox>
      </StyledFooterBoxWrapper>
      <StyledFooterBoxWrapper>
        <StyledTitle>Selos</StyledTitle>
        <StyledItemsHorizontalBox>
          <Selo1 />
          <Selo2 />
        </StyledItemsHorizontalBox>
      </StyledFooterBoxWrapper>
      <StyledFooterBoxWrapper>
        <StyledTitle>Métodos de pagamentos</StyledTitle>
        <PaymentMehod />
      </StyledFooterBoxWrapper>

    </StyledFooterWrapper>
  )
}