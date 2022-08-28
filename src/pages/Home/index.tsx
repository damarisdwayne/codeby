import React, { useState, useEffect } from 'react';
import { 
  FeaturedProducts, 
  FooterMobile, 
  Header, 
  KnowProducts, 
  SearchProducts, 
  NewsLetter, 
  Footer
} from '../../components';
import { TPRODUCT } from '../../components/FeaturedProducts';
import NewsProduct from '../../components/NewsProduct';
import { TCATEGORY } from '../../components/SearchProducts';
import api from '../../services/api';

import { StyledHomeWrapper, StyledTopWrapper, StyledMainWrapper } from './styles';

const Home: React.FC = () => {

  const [categories, setCategories] = useState<TCATEGORY[]>([]);
  const [products, setProducts] = useState<TPRODUCT[]>([]);
  const [productsNews, setProductsNews] = useState<TPRODUCT[]>([]);

  useEffect(()=> {

    async function fetchCategories(){

      try {
        const response = await api.get('/categories');  
        setCategories(response.data);
      } catch (error) {
        alert(error)
      }
    }
    async function fetchProducts(){

      try {
        const response = await api.get('/products', {
          params: {
            limit: 4
          }
        });  

        var products = response.data.map((product: TPRODUCT)=> {
            if(!!product.discount){
              var newPrice = (product.price * (100-product.discount)) / 100;
              return {
                ...product,
                newPrice
              }
            }
            return product
        })
        
        setProducts(products);
      } catch (error) {
        alert(error)
      }
    }
    async function fetchProductsNews(){

      try {
        const response = await api.get('/products', {
          params: {
            order: {
              'createdAt': 'desc'
            },
            limit: 3
          }
        });  

        var products = response.data.map((product: TPRODUCT)=> {
            if(!!product.discount){
              var newPrice = (product.price * (100-product.discount)) / 100;
              return {
                ...product,
                newPrice
              }
            }
            return product
        })
        
        setProductsNews(products);
      } catch (error) {
        alert(error)
      }
    }
    
    fetchCategories();
    fetchProducts();
    fetchProductsNews();
  },[])



  return (
    <StyledHomeWrapper>
      <StyledTopWrapper>
        <Header />
        <SearchProducts categories={categories} />
      </StyledTopWrapper>
      <StyledMainWrapper>
        <FeaturedProducts  products={products}/>
        <NewsProduct productsNews={productsNews}/>
        <NewsLetter />
      </StyledMainWrapper>
      <Footer />
      <FooterMobile />
    </StyledHomeWrapper>
  )
}

export default Home;