import React from 'react';
import NavBar from './components/NavBar.jsx';
import Container from './containers/Container.jsx';
import Home from './pages/Home.jsx';
import Modals from './components/modals/Modals.jsx';
import './App.css';

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
