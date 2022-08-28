import React from 'react';
import Logo from '../../assets/Images/Logo.png';
import { KnowProducts } from '../KnowProducts';

import {
  StyledHeaderWrapper,
  StyledHeader,
  StyledSearchBoxWrapper,
  StyledSearchBox,
  StyledSearchIcon,
  StyledLogowrapper,
  StyledLogo,
  StyledHeaderNavWrapper,
  StyledNavItem

} from './styles';

export const Header: React.FC = () => {
  const NavList = ['Todos os departaments', 'Lançamentos', 'Destaques', 'Pc Gamer', 'Eletrônicos', 'Ofertas',]

  return (
    <StyledHeaderWrapper>
      <StyledHeader>
        <StyledLogowrapper>
          <StyledLogo src={Logo} />
        </StyledLogowrapper>
        <StyledHeaderNavWrapper>
          {NavList.map((item) => (
            <StyledNavItem key={item}>{item}</StyledNavItem>
          ))}
        </StyledHeaderNavWrapper>
        <StyledSearchBoxWrapper>
          <StyledSearchBox type='text' placeholder='O que você procura?' />
          <StyledSearchIcon />
        </StyledSearchBoxWrapper>
      </StyledHeader>
      <KnowProducts />
    </StyledHeaderWrapper>
  )
}