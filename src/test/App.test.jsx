// __tests__/fetch.test.js
import React from 'react';
import { Provider } from 'react-redux';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App.jsx';
import texts from '../assets/texts';
import store from '../redux/store';

const wait = (time) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
const provide = (children) => {
  return render(<Provider store={store}>{children}</Provider>);
};

test('paste text', async () => {
  const app = provide(<App />);
  fireEvent.click(screen.getByText('+'));
  const text = app.getByRole('paste-area', { id: 'paste-area' });
  fireEvent.change(text, { target: { value: texts[1] } });
  fireEvent.click(screen.getByText('Save'));
  expect(screen.getByRole('text', { id: 'guide-text' })).toHaveTextContent(
    texts[1]
  );
});
test('load text 1', async () => {
  provide(<App />);
  fireEvent.click(screen.getByText('1'));
  expect(screen.getByRole('text', { id: 'guide-text' })).toHaveTextContent(
    texts[0]
  );
});
test('load text 2', async () => {
  provide(<App />);
  fireEvent.click(screen.getByText('2'));
  expect(screen.getByRole('text', { id: 'guide-text' })).toHaveTextContent(
    texts[1]
  );
});
test('write text', async () => {
  const app = provide(<App />);
  // select text
  fireEvent.click(screen.getByText('1'));
  // set time
  const input = app.getByRole('input', { id: 'mins-input' });
  fireEvent.change(input, { target: { value: '1' } });
  fireEvent.click(screen.getByText('Set time'));
  // start
  fireEvent.click(screen.getByText('Start'));
  // write
  const text = app.getByRole('write-area', { id: 'write-area' });
  fireEvent.change(text, { target: { value: texts[0].slice(0, 15) } });
  // end
  fireEvent.click(screen.getByText('Pause'));
  // rate
  fireEvent.click(screen.getByText('Rate'));

  expect(screen.getByRole('res-written')).toHaveTextContent(
    'Written words : 3'
  );
  expect(screen.getByRole('res-correct')).toHaveTextContent(
    'Correct words : 3'
  );
  expect(screen.getByRole('res-wrong')).toHaveTextContent('Wrong words : 0');
  expect(screen.getByRole('res-by-minute')).toHaveTextContent(
    'Words by minute : 0'
  );
});
