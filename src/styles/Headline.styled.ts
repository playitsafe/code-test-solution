import styled from 'styled-components'; 

const Headline = styled.h1`
  font-size: 36px;
  font-weight: 300;

  @media (max-width: ${({ theme }) => theme.breakpoints.tab}) {
    font-size: 24px;
  }
`

export default Headline;