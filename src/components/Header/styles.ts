import styled from 'styled-components';
import { Search } from '../../styles/icons'

export const StyledHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: max-content;
  gap: 12px;
  padding: 8px 20px 0;
  background: linear-gradient(180deg, #000000 0%, #000000 13.02%, rgba(0, 0, 0, 0) 100%);

`;

export const StyledHeader = styled.div`
  max-width: 1280px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column-reverse;
  height: max-content;
  gap: 60px;
  padding: 8px 20px 0;

  @media(min-width: 768px) {    
    max-width: 1180px;
    margin: 0 auto;
    flex-direction: row;
    justify-content: space-between;
  }
`

export const StyledHeaderNavWrapper = styled.div`
  display: none;
  align-items: center;
  gap: 61px;
  
  @media(min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`;

export const StyledNavItem = styled.a`
  text-decoration: none;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #F7F7F7;
`

export const StyledSearchBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: #fff;
  border-radius: 20px;
  padding: 11px 15px;

  @media(min-width: 780px) {
    display: none;
  }
`

export const StyledSearchBox = styled.input`
  border: 0;
  outline: 0;
  background-color: transparent;
  width: 100%;  
`

export const StyledLogowrapper = styled.div`
  
`

export const StyledLogo = styled.img`

`;

export const StyledSearchIcon = styled(Search)`
  color: #130118;
  width: 15.65px;
  height: 15.65px;
`

export const StyledKnowProductsWrapper = styled.div`
  width: 100%;
  height: max-content;
  margin-top: 15px;
  padding-bottom: 31px;
  * {
    transition: all 0.3s;
  }  
`;

export const StyledTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 15px;
`;

export const StyledText = styled.h1`
  font-weight: bold;
  font-style: normal;
  font-size: 28px;
  line-height: 34px;
  color: #fff;
  text-shadow: 0px 4px 84px rgba(0, 0, 0, 0.5);
  text-align: center;
`;

export const StyledButton = styled.button`
  background: #AE16D7;
  width: 191px;
  height: 32px;
  padding: 12px 8x;
  border-radius: 8px;
  text-transform: uppercase;
  color: #fff;
  font-weight: 700;
  font-size: 13px;
  line-height: 16px;

  &:hover {
    filter: brightness(0.8);
  }
`

export const StyledNotebookImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 18px;
`

