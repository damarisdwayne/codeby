import React from 'react';
import { Product } from '../Product';

import { StyledNewsProductWrapper, StyledNewsProductsTitle } from './styles';

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
  productsNews: TPRODUCT[]
}

const NewsProduct: React.FC<TFeaturedProductsPROPS> = ({productsNews}) => {
  return (
    <StyledNewsProductWrapper>
      <StyledNewsProductsTitle>Novidades</StyledNewsProductsTitle>
      {productsNews.map((item: TPRODUCT) => (
          <Product
            key={item.id}
            description={item.name}
            classification={item.rating || 0}
            oldPrice={item.price}
            price={item.newPrice || item.price}
            photo={item.photo}
          />
        ))}
    </StyledNewsProductWrapper>
  )
}

export default NewsProduct;