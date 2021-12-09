import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TextArea from '../components/forms/TextArea.jsx';
import Paragraph from '../components/forms/Paragraph.jsx';
import Timer from '../components/timer/Timer.jsx';
import Button from '../components/forms/Button.jsx';
import useStrEvaluator from '../hooks/useStrEvaluator';
import useTextDivider from '../hooks/useTextDivider';
import { setResults, setText, setGuide } from '../redux/slices/counterSlice';
import texts from '../assets/texts';
import { modalPaste, modalResults } from '../redux/slices/modalSlice.js';

function Home() {
  const {
    timer: { running, finalMins },
    counter: { text, guide },
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  const { checked, notChecked } = useTextDivider(
    guide,
    useStrEvaluator(guide, text)
  );
  const handleText = (evt) => {
    const { value: text } = evt.target;
    dispatch(setText({ text }));
  };
  const handleRate = () => {
    const correct = guide.split(' ');
    const input = text.split(' ');
    let points = 0;
    for (let i = 0; i < input.length; i++) {
      if (input[i] === correct[i]) {
        points++;
      }
    }
    dispatch(
      setResults({
        writtenWords: input.length,
        correctWords: points,
        wrongWords: input.length - points,
        wordsByMinute: input.length / finalMins,
      })
    );
    dispatch(modalResults(true));
  };
  const handleGuide = (guide) => {
    dispatch(setGuide({ guide }));
  };
  const handlePaste = () => {
    dispatch(modalPaste(true));
  };
  return (
    <>
      <div className="grid grid-cols-12 gap-2 my-4">
        <Button value="Paste" onClick={handlePaste} />
        {texts.map((text, key) => (
          <Button key={key} value={key + 1} onClick={() => handleGuide(text)} />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4 my-4">
        <Paragraph checked={checked} notChecked={notChecked} />
        <Timer />
      </div>
      <TextArea
        label="Write here"
        placeholder="Write here"
        rows={10}
        id="text-area"
        value={text}
        onChange={handleText}
        disabled={!running}
        selected={true}
      />
      <div className="flex justify-end">
        <Button
          type="button"
          value="Rate"
          onClick={handleRate}
          disabled={text === '' || running}
        />
      </div>
    </>
  );
}

export default Home;
