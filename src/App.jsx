import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar.jsx';
import TextArea from './components/forms/TextArea.jsx';
import Paragraph from './components/forms/Paragraph.jsx';
import Timer from './components/timer/Timer.jsx';
import Container from './containers/Container.jsx';
import { alice2 } from './assets/texts/text.js';
import { useDispatch, useSelector } from 'react-redux';
import { setText } from './redux/slices/counterSlice';
import Button from './components/forms/Button.jsx';

export function App() {
  const { running, text } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleText = (evt) => {
    const { value: text } = evt.target;
    dispatch(setText({ text }));
  };
  const handleClean = () => {
    dispatch(setText({ text: '' }));
  };
  const handleRate = () => {};
  return (
    <>
      <NavBar />
      <Container>
        <div className="grid grid-cols-3 gap-4 my-8">
          <Paragraph
            className="col-span-2 bg-gray-200 border rounded-lg"
            text={alice2}
          />
          <Timer />
        </div>
        <TextArea
          label="Write here"
          placeholder="Write here"
          rows={5}
          id="text-area"
          value={text}
          onChange={handleText}
          disabled={!running}
          selected={true}
        />
        <div className="flex justify-end gap-4">
          <Button
            type="button"
            value="Clean"
            onClick={handleClean}
            disabled={!text}
          />
          <Button
            type="button"
            value="Rate"
            onClick={handleRate}
            disabled={text === ''}
          />
        </div>
      </Container>
    </>
  );
}
export default App;
