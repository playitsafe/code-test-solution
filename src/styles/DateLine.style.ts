import styled from 'styled-components';

const StyledDateLine = styled.p`
  border-bottom: 1px solid ${props => props.theme.dividerColor};
  padding-bottom: 15px;
  margin-bottom: 15px;

  time {
    font-weight: 300;
  }

  svg {
    height: 15px;
    width: 15px;
    margin-left: 5px;
  }
`

export default StyledDateLine;