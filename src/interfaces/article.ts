export interface IArticle {
  headline: string,
  source: string,
  byline: string,
  publicationDate: string,
  blocks: (ITextBlock|IImageBlock|IPullQuote)[]
}

export interface ITextBlock {
  kind: EBlockKind.TEXT,
  text: string,
  intentions: IIntention[]
}

export interface IImageBlock {
  kind: EBlockKind.IMAGE,
  captionText: string,
  url: string
}

export interface IPullQuote {
  kind: EBlockKind.PULL_QUOTE,
  captionText: string,
  url: string
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
  EMPHASIZED = 'emphasized',
  IMPORTANT = 'important'
}