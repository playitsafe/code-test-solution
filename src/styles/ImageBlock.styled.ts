import styled from 'styled-components';

const StyledImageBlock = styled.figure`
  padding: 20px 0; 
  margin: 0 auto;
  max-width: 580px;

  img {
    height: 320px;
  }

  figcaption {
    margin: 10px 0 30px 0;

    svg {
      margin-right: 10px;
    }
  }
`

export default StyledImageBlock;