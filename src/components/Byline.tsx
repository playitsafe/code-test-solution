import React, { FC } from 'react';
import StyledByLine from '../styles/ByLine.styled';

interface IByLineProps {
  byline: string | undefined,
  source: string | undefined,
}

const ByLine: FC<IByLineProps> = ({ byline, source }) => {
  return (
    <StyledByLine>
      <span>{byline}</span>
      <em>{source}</em>
    </StyledByLine>
  );
}

export default ByLine;