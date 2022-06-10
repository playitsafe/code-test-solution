import React, { FC } from 'react';
import StyledHeadline from '../styles/Headline.styled';

interface IHeadlineProps {
  headline: string
}

const Headline: FC<IHeadlineProps> = ({ headline }) => {
  return (
    <StyledHeadline>{headline}</StyledHeadline>
  );
}

export default Headline;