import styled from 'styled-components';

const StyledByline = styled.p`
  margin-top: 16px;

  span:first-child {
    font-weight: 600;

    &::after {
      content: ', ';
    }
  }

  em {
    font-weight: 300;
  }
`

export default StyledByline;