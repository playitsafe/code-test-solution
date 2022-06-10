// import useTextBlock from '../hooks/useTextBlock'
import { sortIntentions, useTextBlock } from '../hooks/useTextBlock'
import { EBlockKind, EIntentionKind } from '../interfaces/article'

const block = {
  "kind": EBlockKind.TEXT,
  "text": "Aenean lacinia bibendum nulla sed consectetur. Sed posuere consectetur est at lobortis. Vestibulum id ligula porta felis euismod semper. Nullam id dolor id nibh ultricies vehicula ut id elit. Vestibulum id ligula porta felis euismod semper.",
  "intentions": [
    {
      "kind": EIntentionKind.EMPHASIZED,
      "index": 0,
      "length": 11
    },
    {
      "kind": EIntentionKind.IMPORTANT,
      "index": 28,
      "length": 27
    }
  ]
};

test('Should sort intention ascending by index', () => {
  const { intentions } = block;
  const sortedIntentions = intentions.sort(sortIntentions('index'));
  expect(sortedIntentions[0].index).toBe(0);
})

test('Should return intended content of text block', () => {
  const intendedContents = useTextBlock(block);
  expect(intendedContents.length).toBe(4);
  expect(intendedContents[0].tag).toBe(EIntentionKind.EMPHASIZED);
  expect(intendedContents[1].tag).toBe(EIntentionKind.PLAIN);
  expect(intendedContents[2].tag).toBe(EIntentionKind.IMPORTANT);
  expect(intendedContents[3].tag).toBe(EIntentionKind.PLAIN);
  
})