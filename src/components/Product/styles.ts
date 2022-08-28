import styled from 'styled-components';

export const StyledProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;  
  border-radius: 10px;
  padding: 8px 10px 13px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.3);
`;

export const StyledProductImage = styled.div`

`

export const StyledProductDescription = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #000000;
  margin-bottom: 10px;
`

export const StyledProductClassification = styled.div`
  margin-bottom: 7px;
`

export const StyledProductOldPrice = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  text-decoration-line: line-through;
  color: #868781;
`

export const StyledProductPrice = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #0A0A0A;
  margin-bottom: 10px;
`

export const StyledProductButton = styled.button`
  width: 130px;
  height: 39px;
  text-align: center;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #fff;
  background: linear-gradient(135deg, #3D033B 0%, #A30E93 100%);
  border-radius: 8px;
`