import styled from 'styled-components';

export const StyledNewsLetterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 28px 39px;
  gap: 20px;
  background: #2D2A26;

  * {
    transition: all 0.3s;
  }
`;

export const StyledLogo = styled.img`
  height: 100%;
  width: 50%;
`

export const StyledNewsLetterTitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  text-align: center;
  color: #FFFFFF;
`

export const StyledNewsLetterInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`

export const StyledNewsLetterInput = styled.input`
  background: #E4E2E4;
  border: 0.662486px solid #130118;
  border-radius: 6px;
  padding: 13px;
  width: 100%;
`

export const StyledNewsLetterButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 13px;
  background: #754DFD;
  color: #fff;
  border-radius: 6px;
  text-transform: uppercase;
  width: 100%;

  &:hover {
    filter: brightness(0.8);
  }
`

