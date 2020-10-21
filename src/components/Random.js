import React, { useState, useEffect } from 'react';
import punk from './punk';
import './Random.css';

const Random = () => {
	const [random, setRandom] = useState([]);

	const onButtonClick = async () => {
		const { data } = await punk.get('/random');
        setRandom(data[0]);
	};

	useEffect(() => {
		onButtonClick();
	}, [])

	return (
		<div className="random">
			<div className="random-top">
				<button onClick={onButtonClick} className="random-button">
					Random Beer
				</button>
			</div>
			<div className="random-bottom">
				<div className="random-showcase">
					<div className="random-left">
						<img className="random-image" src={random.image_url}/>
					</div>
					<div className="random-right">
						<h3>{random.name}</h3>
						<h4>{random.tagline}</h4>
						<p>{random.description}</p>
						<p>ABV: {random.abv}</p>
						<p>IBU: {random.ibu}</p>
						<p>Food Pairing: {random.food_pairing}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Random;
