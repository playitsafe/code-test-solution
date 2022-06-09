export interface IArticle {
  headline: string,
  source: string,
  byline: string,
  publicationDate: string,
  blocks: (ITextBlock | IImageBlock | IPullQuoteBlock)[]
}

// export type TBlock = ITextBlock | IImageBlock | IPullQuoteBlock;
export interface IBaseBlock {
  kind: EBlockKind
}

export interface ITextBlock extends IBaseBlock {
  text?: string,
  intentions?: IIntention[]
}

export interface IImageBlock extends IBaseBlock {
  captionText?: string,
  url?: string
}

export interface IPullQuoteBlock extends IBaseBlock {
  text?: string,
  attribution?: string
}

export enum EBlockKind {
  TEXT = 'text',
  IMAGE = 'image',
  PULL_QUOTE = 'pull-quote'
}

export interface IIntention {
  kind: EIntentionKind,
  index: number,
  length: number
}

export enum EIntentionKind {
  PLAIN = 'plain',
  EMPHASIZED = 'emphasized',
  IMPORTANT = 'important'
}

export interface IRenderTextBlockElement {
  tag: EIntentionKind,
  text: string | undefined
}
