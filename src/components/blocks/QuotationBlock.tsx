import React, { FC } from 'react';
import StyledQuotationBlock from '../../styles/QuotationBlock.styled';
import type { IPullQuoteBlock } from '../../interfaces/article';

interface IQuotationBlockProps {
  item: IPullQuoteBlock
}

const QuotationBlock: FC<IQuotationBlockProps> = ({ item }) => {
  return (
    <StyledQuotationBlock>
      {item.text}
      <small>{item.attribution}</small>
    </StyledQuotationBlock>
  );
}

export default QuotationBlock;