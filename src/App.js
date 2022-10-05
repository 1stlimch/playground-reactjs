import Button from './Button';
import styles from './App.module.css';
import {useEffect, useState} from 'react';

function App() {
  const [counter, setValue] = useState(0);
  const countUp = () => setValue(counter + 1);

  const [keyword, setKeyword] = useState('');
  const onChange = (e) => setKeyword(e.target.value);

  console.log('rendered');
  useEffect(() => { console.log(`Call the api`) }, []);
  useEffect(() =>{ 
    if (keyword !== "" && keyword.length > 5) { console.log("Search for: ", keyword);}
  }, [keyword]);

  return (
    <div className="App">
      <input value={keyword} onChange={onChange} type="text" placeholder="Search here" />
      <h1>{counter}</h1>
      <button onClick={countUp}>Count Up</button>
    </div>
  );
}

export default App;
