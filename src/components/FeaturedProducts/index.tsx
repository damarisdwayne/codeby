import React from 'react';
import { Product } from '../';

import {
  StyledFeaturedProductsWrapper,
  StyledFeaturedProductsTitle,
  StyledProductsWrapper
} from './styles';

export type TPRODUCT = {
  id: string;
  name: string;
  photo: string;
  price: number;
  newPrice?: number;
  discount?: number;
  rating?: number;
  color?: string;
}

type TFeaturedProductsPROPS = {
  products: TPRODUCT[]
}

export const FeaturedProducts: React.FC<TFeaturedProductsPROPS> = ({products}) => {
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
        {products.map((item: TPRODUCT) => (
          <Product
            key={item.id}
            description={item.name}
            classification={item.rating || 0}
            oldPrice={item.price}
            price={item.newPrice || item.price}
            photo={`http://161.35.55.143:3333/files/${item.photo}`}
          />
        ))}
      </StyledProductsWrapper>
    </StyledFeaturedProductsWrapper>
  )
}