import Button from './Button';
import styles from './App.module.css';
import {useEffect, useState} from 'react';

function App() {
	const [loading, setLoading] = useState(true);
	const [coinList, setCoinList] = useState([]);

	useEffect(() =>{
		fetch('https://api.coinpaprika.com/v1/tickers')
			.then((response) => response.json())
			.then((json) => {
				setLoading(false);
				setCoinList(json)
					console.log(json);
			})
	}, []);
	
		return (
			<div className='App'>
				<h1>The Coins!</h1>
				<hr />
				{loading ? <strong>Loading...</strong> : 
				<select>
					{coinList.map((coin) => (
						<option>
							{coin.name} - {coin.symbol} - ${coin.quotes.USD.price}
						</option>
					))}
				</select>}
				
			</div>)
}

export default App;
