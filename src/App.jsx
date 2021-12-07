import React from 'react';
import './App.css';
import NavBar from './components/NavBar.jsx';
import TextArea from './components/forms/TextArea.jsx';
import Timer from './components/timer/Timer.jsx';
import Container from './containers/Container.jsx';

export function App() {
  return (
    <>
      <NavBar />
      <Container>
        <Timer />
        <TextArea
          label="Write here"
          placeholder="Write here"
          rows={5}
          id="text-area"
          value=""
          onChange={() => {}}
        />
      </Container>
    </>
  );
}
export default App;
