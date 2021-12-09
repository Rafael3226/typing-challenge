// __tests__/fetch.test.js
import React from 'react';
import { Provider } from 'react-redux';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import store from '../redux/store';
import Timer from '../components/timer/Timer';

// beforeAll(() => {});
// afterEach(() => {});
// afterAll(() => {});
const wait = (time) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
const provide = (children) => {
  return render(<Provider store={store}>{children}</Provider>);
};

test('set timer', async () => {
  const component = provide(<Timer />);
  const input = component.getByRole('input', { id: 'mins-input' });
  fireEvent.change(input, { target: { value: '20' } });
  fireEvent.click(screen.getByText('Set time'));
  expect(screen.getByRole('timer', { id: 'timer-clock' })).toHaveTextContent(
    '20:00'
  );
});
test('clean timer', async () => {
  provide(<Timer />);
  fireEvent.click(screen.getByText('Clean'));
  expect(screen.getByRole('timer', { id: 'timer-clock' })).toHaveTextContent(
    '00:00'
  );
});
test('start timer', async () => {
  const component = provide(<Timer />);
  const input = component.getByRole('input', { id: 'mins-input' });
  fireEvent.change(input, { target: { value: '1' } });
  fireEvent.click(screen.getByText('Set time'));
  fireEvent.click(screen.getByText('Start'));

  await wait(1100);
  fireEvent.click(screen.getByText('Pause'));
  expect(screen.getByRole('timer', { id: 'timer-clock' })).toHaveTextContent(
    '00:58'
  );
});
