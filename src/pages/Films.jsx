import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Films = () => {
	const [films, setFilms] = useState([]);

	useEffect(() => {
		fetch('https://ghibliapi.herokuapp.com/films')
			.then(res => res.json())
			.then(data => setFilms(data))
			.catch(err => alert(err.message));
	}, []);

	return (
		<div className='row justify-content-center'>
			{films.map(film => (
				<div key={`${film.id}`} className='card col-md-3 col-lg-2 m-4'>
					<img src={`${film.image}`} className='card-img-top' />
					<div className='card-body'>
						<h4 className='card-title'>{film.title}</h4>
						<div className='card-text'>
							{film.description.substring(1, 100)}...
						</div>
						<NavLink
							className={'btn btn-primary'}
							to={`/films/${film.id}`}
						>
							Details
						</NavLink>
					</div>
				</div>
			))}
		</div>
	);
};

export default Films;
