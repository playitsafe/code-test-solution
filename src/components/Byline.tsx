import React, { FC } from 'react';
import StyledByLine from '../styles/ByLine.styled';

interface ByLineProps {
  byline: string | undefined,
  source: string | undefined,
}

const ByLine: FC<ByLineProps> = ({ byline, source }) => {
  return (
    <StyledByLine>
      <span>{byline}</span>
      <em>{source}</em>
    </StyledByLine>
  );
}

export default ByLine;