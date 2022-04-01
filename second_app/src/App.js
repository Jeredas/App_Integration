import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [text, setText] = useState(0)
  const click = () => {
    setText(text + 1)
  }
  return (
    <div className={'App'}>
      {text}
     <button onClick={click}>Increment</button>
    </div>
  );
}

export default App;
