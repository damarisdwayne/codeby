import styled from 'styled-components';

export const StyledContainer = styled.div`
  background-color: #130118;
  padding: 13px 20px 30px;
  position: relative;
  overflow: hidden;
`;

export const Container = styled.div`
  padding: 13px 20px 30px;
  position: relative;
  overflow: hidden;

  @media(min-width: 780px) {
    max-width: 920px;
    margin: 0 auto;
  }
`;

export const StyledSearchProductsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const StyledImg = styled.img`
  background-position: center;
  width: 100%;
  height: 100%;
  margin-right: 2px;
`;

export const StyledSearchProductsTitle = styled.h4`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 19px;
  letter-spacing: 0.2px;
  color: #FFFFFF;
  margin-bottom: 20px;

  @media(min-width: 780px) {
    display: none;
  }
`;

export const StyledSearchProduct= styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 64.37px;
  height: 62.48px;
  background: linear-gradient(180deg, rgba(110, 118, 71, 0.17) 11.46%, #2F2F2D 100%);
  border: 2.11244px solid #C706FF;
  box-shadow: 0px 0px 5.28111px 0.528111px #C706FF;
`;

export const StyledSearchProductsBox= styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  width: 100%;
`;

export const StyledSearchProducts= styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;


export const StyledSearchProductName= styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 9px;
  line-height: 10px;
  text-align: center;
  color: #B7B7B7;
`;


