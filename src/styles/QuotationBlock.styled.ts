import styled from 'styled-components';

const StyledQuotationBlock = styled.blockquote`
  font-size: 25px;
  max-width: 560px;
  font-style: italic;
  font-weight: 300;
  padding: 0 25px;
  margin: 10px auto 30px auto;
  border-left: 8px solid ${({ theme }) => theme.deepBlue};

  small {
    display: block;
    font-size: 14px;
    margin-top: 10px;
  }
`

export default StyledQuotationBlock;