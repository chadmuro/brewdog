import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Search.css';

const Search = () => {
	const [beer, setBeer] = useState('');
	const [beerList, setBeerList] = useState([]);

	const onFormSubmit = async (e) => {
		e.preventDefault();

		const { data } = await axios.get('https://api.punkapi.com/v2/beers', {
			params: {
				beer_name: beer,
			},
		});
		setBeerList(data);
	};

	const renderedBeers = beerList.map((beer) => {
		return (
			<div key={beer.id} className="beer-item">
				<div className="beer-item-left">
					<img src={beer.image_url} />
				</div>
                <div className="beer-item-right">
                    <h3>{beer.name}</h3>
                    <p>{beer.description}</p>
                </div>
			</div>
		);
	});

	return (
		<div className="beer">
			<div className="search">
				<form className="form">
					<input
						type="text"
						className="input"
						value={beer}
						placeholder="Search beer..."
						onChange={(e) => setBeer(e.target.value)}
					/>
					<button className= "button" onClick={onFormSubmit}>Search</button>
				</form>
			</div>
            <div className="beer-content">
                {renderedBeers}
            </div>
		</div>
	);
};

export default Search;
