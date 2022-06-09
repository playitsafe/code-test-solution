import React, { FC } from 'react';
import TextBlock from './TextBlock';
import ImageBlock from './ImageBlock';
import QuotationBlock from './QuotationBlock';
import type { ITextBlock, IImageBlock, IPullQuoteBlock } from '../../interfaces/article';
import { EBlockKind } from '../../interfaces/article';

interface IBlockProps {
  item: ITextBlock | IImageBlock | IPullQuoteBlock;
}

const Block: FC<IBlockProps> = ({ item }) => {
  const blockRenderingMap = {
    [EBlockKind.TEXT]: TextBlock,
    [EBlockKind.IMAGE]: ImageBlock,
    [EBlockKind.PULL_QUOTE]: QuotationBlock
  };
  const RenderBlock = blockRenderingMap[item.kind];
  
  return (
    <RenderBlock item={item} />
  );
}

export default Block; 