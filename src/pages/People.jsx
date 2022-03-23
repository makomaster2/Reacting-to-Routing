import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const People = () => {
	const { peopleId } = useParams();

	const [details, setDetails] = useState([]);

	useEffect(() => {
		fetch(`https://ghibliapi.herokuapp.com/people`)
			.then(res => res.json())
			.then(data => setDetails(data))
			.catch(err => alert(err.message));
	}, []);

	return (
		<div className='row justify-content-center'>
			{details.map(detail => (
				<div className='card col-md-4 col-lg-2 m-2'>
					<div className='card-body'>
						<h2 className='card-title'>
							<u>{detail.name}</u>
						</h2>
						<div className='card-text'>
							<b>Gender:</b> {detail.gender}
						</div>
						<div className='card-text'>
							<b>Age:</b> {detail.age}
						</div>
						<div className='card-text'>
							<b>Eye Color:</b> {detail.eye_color}
						</div>
						<div className='card-text'>
							<b>Hair Color:</b> {detail.hair_color}
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default People;
