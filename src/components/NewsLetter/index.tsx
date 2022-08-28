import Notebook from '../../assets/Images/notebook.png'
import { 
  StyledNewsLetterWrapper,
  StyledLogo,
  StyledNewsLetterTitle,
  StyledNewsLetterInputWrapper,
  StyledNewsLetterInput,
  StyledNewsLetterButton,

} from './styles';

export const NewsLetter= () => {
  return (
    <StyledNewsLetterWrapper>
      <StyledNewsLetterTitle>
        Faça parte do clube Codetech e ganhe <br />
        10% de desconto na sua primeira compra!
      </StyledNewsLetterTitle>
      <StyledNewsLetterInputWrapper>
        <StyledNewsLetterInput type='email' placeholder='Digite seu email'/>
        <StyledNewsLetterButton>Enviar</StyledNewsLetterButton>
      </StyledNewsLetterInputWrapper>
    </StyledNewsLetterWrapper>
  )
}