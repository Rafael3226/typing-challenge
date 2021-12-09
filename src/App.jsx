import React from 'react';
import NavBar from './components/NavBar.jsx';
import Container from './containers/Container.jsx';
import Home from './pages/Home.jsx';
import './App.css';
import Results from './pages/Results.jsx';
import Paste from './pages/Paste.jsx';

export function App() {
  return (
    <>
      <NavBar />
      <Container>
        <Home />
      </Container>
      <Results />
      <Paste />
    </>
  );
}
export default App;
