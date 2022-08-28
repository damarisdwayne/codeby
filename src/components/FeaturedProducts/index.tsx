import React from 'react';
import { Product } from '../';

import {
  StyledFeaturedProductsWrapper,
  StyledFeaturedProductsTitle,
  StyledProductsWrapper
} from './styles';

export const FeaturedProducts: React.FC = () => {
  const productList = [
    { id: 1, description: 'Notebook VAIO® FE15 Intel® Core™ i7', classification: 4, oldPrice: 600, price: 500 },
    { id: 2, description: 'Notebook VAIO® FE15 Intel® Core™ i7', classification: 4, oldPrice: 600, price: 500 },
    { id: 3, description: 'Notebook VAIO® FE15 Intel® Core™ i7', classification: 4, oldPrice: 600, price: 500 },
    { id: 4, description: 'Notebook VAIO® FE15 Intel® Core™ i7', classification: 4, oldPrice: 600, price: 500 },
  ]

  return (
    <StyledFeaturedProductsWrapper>
      <StyledFeaturedProductsTitle>Produtos em destaque</StyledFeaturedProductsTitle>
      <StyledProductsWrapper>
        {productList.map((item) => (
          <Product
            key={item.id}
            description={item.description}
            classification={item.classification}
            oldPrice={item.oldPrice}
            price={item.price}
          />
        ))}
      </StyledProductsWrapper>
    </StyledFeaturedProductsWrapper>
  )
}