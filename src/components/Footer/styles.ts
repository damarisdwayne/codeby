import styled from 'styled-components';

export const StyledFooterWrapper = styled.footer`
  background: #151513;
  gap: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 100px;
`;

export const StyledFooterBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 20px;
  width: 100%;
  border-bottom: 1px solid #454545;
`;

export const StyledSocialNetworksWrapper = styled(StyledFooterBoxWrapper)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const StyledTitle = styled.h4`
  color: #fff;
  font-weight: 600;
`;

export const StyledItemsVerticalBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
`;

export const StyledItemsHorizontalBox = styled(StyledItemsVerticalBox)`
  flex-direction: row;
`;

export const StyledText = styled.p`
  color: #ccc;
  font-weight: 500;
  font-size: 14px;
`;
