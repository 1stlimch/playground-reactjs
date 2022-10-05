import Button from './Button';
import styles from './App.module.css';
import {useEffect, useState} from 'react';

function Hello() {
  function by() { console.log("Bye"); }
  function hi() {console.log("Hi"); return by; }

  useEffect(hi, []);
  return <div className='Hello'>Hello</div>;
}

function App() {
  //console.log("Render App");
  const [state, setState] = useState(false);
  const onClick = () => {setState(!state); }

  return (
    <div className="App">
      {state ? <Hello /> : null}
      <button onClick={onClick}>{state ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
