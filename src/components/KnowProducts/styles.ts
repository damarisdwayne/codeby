import styled from 'styled-components';

export const StyledKnowProductsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: max-content;
  margin-top: 15px;
  padding-bottom: 31px;
  align-items: center;
  justify-content: center;
  * {
    transition: all 0.3s;
  }  
  
  @media(min-width: 780px) {
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    padding: 8px 20px 0;
    max-width: 920px;
    margin: 0 auto;
  }
`;

export const StyledTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 20px;
  margin-bottom: 15px; 
`;

export const StyledText = styled.h1`
  font-weight: bold;
  font-style: normal;
  font-size: 28px;
  color: #fff;
  text-shadow: 0px 4px 84px rgba(0, 0, 0, 0.5);
  text-align: center;

  @media(min-width: 780px) {
     text-align: left;
     font-size: 40px;
  }
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

export const StyledNotebookImage = styled.img`
  width: 286px;
  height: 232px;

  @media(min-width: 780px) {
    width: 450px;
    height: 380px;
  }
`
