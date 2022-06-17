import type { IIntention, ITextBlock, IRenderTextBlockElement } from '../interfaces/article';
import { EIntentionKind } from '../interfaces/article';

export const sortIntentions = (sortKey: string) => {
  return (i: any, j: any) => i[sortKey] - j[sortKey];
}

/**
 * Split origin text based on index and Re-organize text structure
 */
export const convertIntendedContent = (text: string, sortedIntentions: IIntention[]): IRenderTextBlockElement[] => {
  const length = text.length;
  const renderElements: IRenderTextBlockElement[] = [];
  let beginIndex = 0;
  sortedIntentions.forEach((intention, i) => {
    // add plain text before this intention span
    (intention.index !== 0) && renderElements.push({
      tag: EIntentionKind.PLAIN,
      text: text.slice(beginIndex, intention.index)
    });

    // add current intention span
    renderElements.push({
      tag: intention.kind,
      text: text.slice(intention.index, intention.index + intention.length)
    });

    //set next beginIndex
    beginIndex = intention.index + intention.length;

    //set rest part to plain text only if it's last intention
    (i === sortedIntentions.length - 1) && renderElements.push({
      tag: EIntentionKind.PLAIN,
      text: text.slice(beginIndex, length - 1)
    });
  })
  return renderElements;
}

export const useTextBlock = (textBlockItem: ITextBlock) => {
  const { text, intentions } = textBlockItem;
  // Return whole block as plain text if no intention is specified
  if (!intentions || !text || intentions.length < 1) return [{ tag: EIntentionKind.PLAIN, text }];
  // Sort intentions by ascend index to prevent disorder after splitting
  const sortedIntentions = intentions.sort(sortIntentions( 'index'));

  return convertIntendedContent(text, sortedIntentions);
}
