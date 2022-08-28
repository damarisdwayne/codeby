import React from 'react';
import {Notebook} from '../../assets/Icons'

import { 
  StyledProductWrapper,
  StyledProductImage,
  StyledProductDescription,
  StyledProductClassification,
  StyledProductOldPrice,
  StyledProductPrice,
  StyledProductButton,

} from './styles';

interface ProdutcProps {
  description: string
  classification: number
  oldPrice: number
  price: number,
  photo: string,
}

export const Product = ({description, classification, oldPrice, price,photo}: ProdutcProps) => {
  return (
    <StyledProductWrapper>
      <StyledProductImage>
        <Notebook width={150} height={120} />
      </StyledProductImage>
      <StyledProductDescription>{description}</StyledProductDescription>
      <StyledProductClassification>{classification}</StyledProductClassification>
      <StyledProductOldPrice>R$ {oldPrice}</StyledProductOldPrice>
      <StyledProductPrice>R$ {price}</StyledProductPrice>
      <StyledProductButton>Comprar</StyledProductButton>
    </StyledProductWrapper>
  )
}
