import styled from 'styled-components';

export const StyledFooterMobileWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 67.33px;
  position: absolute;
  bottom: 0;
  position: fixed;
  background: #130118;
  box-shadow: 0px -6px 12px 0px #13131359;
  border-width: 1px;  
  border-style: solid;
  border-top-color: #A30E93;
  border-top-right-radius: 14px;
  border-top-left-radius: 14px;
  overflow: hidden;

  @media (min-width: 768px) {
    display: none;
    background-color: none;
  }
`;

export const StyledIconWrapper = styled.div`

`
