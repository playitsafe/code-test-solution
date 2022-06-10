import React, { FC } from 'react';
import StyledTextBlock from '../../styles/TextBlock.styled';
import { useTextBlock } from '../../hooks/useTextBlock';
import type { ITextBlock, IRenderTextBlockElement } from '../../interfaces/article';
import { EIntentionKind } from '../../interfaces/article';

interface ITextBlockProps {
  item: ITextBlock
}

const renderElementMap = {
  [EIntentionKind.PLAIN]: (intendedContent: IRenderTextBlockElement, key: number) => <span key={key}>{intendedContent.text}</span>,
  [EIntentionKind.EMPHASIZED]: (intendedContent: IRenderTextBlockElement, key: number) => <em key={key}>{intendedContent.text}</em>,
  [EIntentionKind.IMPORTANT]: (intendedContent: IRenderTextBlockElement, key: number) => <strong key={key}>{intendedContent.text}</strong>
}

const TextBlock: FC<ITextBlockProps> = ({ item }) => {
  const intendedContents = useTextBlock(item);
  return (
    <StyledTextBlock>
      {intendedContents.map((content, key) => {
        return renderElementMap[content.tag](content, key)
      })}
    </StyledTextBlock>
  );
}

export default TextBlock;