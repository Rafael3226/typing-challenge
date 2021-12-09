import React from 'react';
import NavBar from './components/NavBar.jsx';
import Container from './containers/Container.jsx';
import Home from './pages/Home.jsx';
import './App.css';
import Results from './components/modals/Results.jsx';
import Paste from './components/modals/Paste.jsx';
import Modals from './pages/Modals.jsx';

export function App() {
  return (
    <>
      <NavBar />
      <Container>
        <Home />
      </Container>
      <Modals />
    </>
  );
}
export default App;
