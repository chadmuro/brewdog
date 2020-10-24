import React, { useState, useEffect } from 'react';
import punk from './punk';
import './Random.css';



const Random = () => {
	const [random, setRandom] = useState([]);
	const [food, setFood] = useState([]);

	const onButtonClick = async () => {
		const { data } = await punk.get('/random');
		setRandom(data[0]);
		setFood(data[0].food_pairing[0]);
	};

	useEffect(() => {
		onButtonClick();
	}, []);

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
						<img className="random-image" src={random.image_url} alt={random.name}/>
					</div>
					<div className="random-right">
						<div className="random-title">
							<h3>{random.name}</h3>
							<h4>{random.tagline}</h4>
						</div>
						<p>{random.description}</p>
						<div className="random-info">
							<p>ABV: {random.abv}</p>
							<p>IBU: {random.ibu}</p>
						</div>

						<p>Food Pairing: {food}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Random;
