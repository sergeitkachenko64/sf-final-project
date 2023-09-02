import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Page1 from './Page1';

const Page4 = () => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				margin: '10px 0 0',
			}}>
			<h1 style={{ color: 'red', fontSize: '40px', marginBottom: '20px' }}>
				404 Страница не найдена!
			</h1>
			<Link to='/'>На главную</Link>

			<Routes>
				<Route
					path='/'
					element={<Page1 />}
				/>
			</Routes>
		</div>
	);
};

export default Page4;
