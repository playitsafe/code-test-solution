import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('should render news article', () => {
  const { container } = render(<App />);
  const article = container.querySelector('article');
  expect(article).toBeInTheDocument();
})

test('renders news title', () => {
  const { container } = render(<App />);
  const article = container.querySelector('h1');
  expect(article).toBeInTheDocument();
});
