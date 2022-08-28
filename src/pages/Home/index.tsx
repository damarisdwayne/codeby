import React from 'react';
import { 
  FeaturedProducts, 
  FooterMobile, 
  Header, 
  KnowProducts, 
  SearchProducts, 
  NewsLetter, 
  Footer
} from '../../components';
import NewsProduct from '../../components/NewsProduct';

import { StyledHomeWrapper, StyledTopWrapper, StyledMainWrapper } from './styles';

const Home: React.FC = () => {
  return (
    <StyledHomeWrapper>
      <StyledTopWrapper>
        <Header />
        <SearchProducts />
      </StyledTopWrapper>
      <StyledMainWrapper>
        <FeaturedProducts />
        <NewsProduct />
        <NewsLetter />
      </StyledMainWrapper>
      <Footer />
      <FooterMobile />
    </StyledHomeWrapper>
  )
}

export default Home;