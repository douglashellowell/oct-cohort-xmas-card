import logo from './logo.svg';
import './App.css';
import CardOpen from './components/CardOpen';
import { useState } from 'react';
import CardClosed from './components/CardClosed';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <section id="christmas-card" onClick={() => setIsOpen((b) => !b)}>
        {isOpen ? <CardOpen /> : <CardClosed />}
      </section>
    </div>
  );
}

export default App;
