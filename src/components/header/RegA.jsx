import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Limit from './Limit';

import style from './header.module.css';
import photo from '../header/img/alex_photo.jpg';
import Page1 from '../../pages/Page1';

const RegA = () => {
	return (
		<>
			<Limit />
			<div className={style.reg__active}>
				<div className={style.txt__decor}>
					<p className={style.reg__txt}>Алексей А.</p>
					<Link
						to='/'
						className={style.link}>
						Выйти
					</Link>
				</div>
				<img
					style={{ borderRadius: '50%' }}
					src={photo}
					alt='img'
				/>
				<Routes>
					<Route
						path='/page1'
						element={<Page1 />}
					/>
				</Routes>
			</div>
		</>
	);
};

export default RegA;
