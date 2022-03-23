import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Film = () => {
	const { filmId } = useParams();

	const [film, setFilm] = useState([]);

	useEffect(() => {
		fetch(`https://ghibliapi.herokuapp.com/films/${filmId}`)
			.then(res => res.json())
			.then(data => setFilm(data))
			.catch(err => alert(err.message));
	}, []);

	return (
		<div className='card'>
			<img src={`${film.movie_banner}`}></img>
			<div className='card-body'>
				<h4 className='card-title'>Title: {film.title}</h4>
				<p className='card-text'>
					Original Title: {film.original_title}
				</p>
				<p className='card-text'>Description: {film.description}</p>
				<p className='card-text'>Director: {film.director}</p>
				<p className='card-text'>Producer: {film.producer}</p>
				<p className='card-text'>Release Date: {film.release_date}</p>
				<p className='card-text'>Running Time: {film.running_time}</p>
				<p className='card-text'>
					Rotten Tomato Score: {film.rt_score}
				</p>
			</div>
		</div>
	);
};

export default Film;
