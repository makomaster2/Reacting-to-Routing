import { NavLink } from 'react-router-dom';

const NavBar = () => {
	return (
		<nav className='nav nav-tabs justify-content-center'>
			<NavLink
				to={'/home'}
				className={({ isActive }) => `nav-link ${isActive && 'active disabled'}`}>
				Home
			</NavLink>
			<NavLink
				to={'/films'}
				className={({ isActive }) => `nav-link ${isActive && 'active disabled'}`}>
				View Films
			</NavLink>
			<NavLink
				to={'/people'}
				className={({ isActive }) => `nav-link ${isActive && 'active disabled'}`}>
				View People
			</NavLink>
		</nav>
	);
};

export default NavBar;
