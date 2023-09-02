import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Page2 from '../../pages/Page2';

import Button from 'react-bootstrap/Button';
import style from './header.module.css';

const ButtonP = () => {
	return (
		<>
			<Link to='/page2'>
				<Button
					variant='primary'
					className={['btn btn-info btn-sm', style.btn__app].join(' ')}>
					Войти
				</Button>
			</Link>

			<Routes>
				<Route
					path='/page2'
					element={<Page2 />}
				/>
			</Routes>
		</>
	);
};

export default ButtonP;
