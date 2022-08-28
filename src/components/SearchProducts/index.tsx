import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

import Charger from '../../assets/Images/Charger.png'
import Computer from '../../assets/Images/Computer.png'
import Headset from '../../assets/Images/Headset.png'
import Lamp from '../../assets/Images/Lamp.png'
import Accessories from '../../assets/Images/Accessories.png'
import Televisions from '../../assets/Images/Televisions.png'
import CellPhones from '../../assets/Images/CellPhones.png'
import Projectors from '../../assets/Images/Projectors.png'

import {
  StyledContainer,
  Container,
  StyledSearchProductsWrapper,
  StyledSearchProductsTitle,
  StyledSearchProductsBox,
  StyledSearchProduct,
  StyledSearchProductName,
  StyledImg

} from './styles';
import '../../styles/swiper.css'
import api from '../../services/api';

const ProductList = [
  { img: Headset, name: 'Fone de ouvido', id: 1 },
  { img: Charger, name: 'Carregador', id: 2 },
  { img: Computer, name: 'Computador', id: 3 },
  { img: Lamp, name: 'Casa Inteligente', id: 4 },
  { img: Accessories, name: 'Acessórios', id: 5 },
  { img: Televisions, name: 'Televisores', id: 6 },
  { img: CellPhones, name: 'Celulares', id: 7 },
  { img: Projectors, name: 'Projetores', id: 8 },
]

export type TCATEGORY = {
  id: string;
  name: string;
  photo: string;
}

type TSearchProductsPROPS = {
  categories: TCATEGORY[]
}

export const SearchProducts: React.FC<TSearchProductsPROPS> = ({categories}) => {

  return (
    <StyledContainer>
      <Container>
        <StyledSearchProductsTitle>O que você está buscando</StyledSearchProductsTitle>
        <StyledSearchProductsWrapper>
          <Swiper
            modules={[Pagination]}
            spaceBetween={20}
            slidesPerView={4}
            pagination={{ clickable: true }}
            className="mySwiper"
          >
            {categories.map((item: TCATEGORY) => (
              <SwiperSlide key={item.id}>
                <StyledSearchProductsBox>
                  <StyledSearchProduct>
                  <StyledImg src={`http://161.35.55.143:3333/files/${item.photo}`} />
                  </StyledSearchProduct>
                  <StyledSearchProductName>{item.name}</StyledSearchProductName>
                </StyledSearchProductsBox>
              </SwiperSlide>
            ))}
          </Swiper>
        </StyledSearchProductsWrapper>
      </Container>
    </StyledContainer>
  )
}
