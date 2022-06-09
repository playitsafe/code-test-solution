import React, { FC } from 'react';
import StyledByline from '../styles/Byline.styled';

interface BylineProps {
  byline: string | undefined,
  source: string | undefined,
}

const Byline: FC<BylineProps> = ({ byline, source }) => {
  return (
    <StyledByline>
      <span>{byline}</span>
      <em>{source}</em>
    </StyledByline>
  );
}

export default Byline;