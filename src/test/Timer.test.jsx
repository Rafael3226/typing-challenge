// __tests__/fetch.test.js
import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Timer from '../components/timer/Timer';

beforeAll(() => {});
afterEach(() => {});
afterAll(() => {});

// test('count timer', async () => {
//   render(<Timer />);
//   fireEvent.change(input, { target: { value: '20' } });
//   screen.getByRole('textarea', {});
//   fireEvent.click(screen.getByText('Start'));

//   await waitFor(() => screen.getByRole('heading'));

//   expect(screen.getByRole('heading')).toHaveTextContent('hello there');
//   expect(screen.getByRole('button')).toBeDisabled();
// });
test('set timer', async () => {
  const component = render(<Timer />);
  const textArea = component.getByRole('textarea', { id: 'text-area' });
  fireEvent.change(textArea, { target: { value: '20' } });
  fireEvent.fireEvent.click(screen.getByText('Set time'));

  expect(screen.getByRole('span')).toHaveTextContent('20:00');
});
