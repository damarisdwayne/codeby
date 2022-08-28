import Notebook  from '../../assets/Images/Notebook.png'

import {
  StyledKnowProductsWrapper,
  StyledNotebookImage,
  StyledTextWrapper,
  StyledText,
  StyledButton
} from './styles';

export const KnowProducts: React.FC = () => {
  return (
    <StyledKnowProductsWrapper>
      <StyledNotebookImage src={Notebook} />
      <StyledTextWrapper>
        <StyledText>
          Conheça a nova linha<br /> de tecnologia 6G
        </StyledText>
        <StyledButton>Saiba Mais</StyledButton>
      </StyledTextWrapper>
    </StyledKnowProductsWrapper>
  )
}