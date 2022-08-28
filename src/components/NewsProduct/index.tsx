import React from 'react';
import { Product } from '../Product';

import { StyledNewsProductWrapper, StyledNewsProductsTitle } from './styles';

const NewsProduct: React.FC = () => {
  return (
    <StyledNewsProductWrapper>
      <StyledNewsProductsTitle>Novidades</StyledNewsProductsTitle>
      <Product
        description='Notebook VAIO® FE15 Intel® Core™ i7 + Headphone G300'
        classification={5}
        oldPrice={600}
        price={500}
      />
    </StyledNewsProductWrapper>
  )
}

export default NewsProduct;