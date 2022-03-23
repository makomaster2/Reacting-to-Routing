import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './pages/Home';
import Films from './pages/Films';
import Film from './pages/Film';
import People from './pages/People';

const App = () => {
	return (
		<BrowserRouter>
			<NavBar />
			<div className='d-flex flex-wrap justify-content-center text-center'>
				<Routes>
					<Route path='/home' element={<Home />} />
					<Route path='/films' element={<Films />} />
					<Route path='/films/:filmId' element={<Film />} />
					<Route path='/people' element={<People />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
};

export default App;
