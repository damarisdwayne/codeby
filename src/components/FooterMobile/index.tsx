import React from 'react';
import { Cart, Menu, User, Search } from '../../assets/Icons'

import { StyledFooterMobileWrapper, StyledIconWrapper } from './styles';

export const FooterMobile: React.FC = () => {
  const IconList = [Cart, Menu, User, Search]

  return (
    <StyledFooterMobileWrapper>
      {IconList.map((Item) => (
        <StyledIconWrapper>
          <Item width={36} height={36}/>
        </StyledIconWrapper>
      ))}
    </StyledFooterMobileWrapper>
  )
}