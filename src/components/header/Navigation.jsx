import { Routes, Route, Link } from 'react-router-dom';

import style from './header.module.css';
import { AiOutlineClose } from 'react-icons/ai';

import logoImg from '../header/img/logo.png';
import logoImgWhite from '../footer/img/logo_w.png';
import Page1 from '../../pages/Page1';

const Navigation = () => {
	return (
		<>
			<div className={style.logo}>
				<img
					src={logoImg}
					alt='logo'
				/>
			</div>
			<div className={style.logo__w}>
				<img
					src={logoImgWhite}
					alt='logo'
				/>
			</div>
			<AiOutlineClose
				size={35}
				color='white'
				className={style.cross}
			/>
			<ul className={style.menu}>
				<li>
					<Link
						to='/'
						className={style.item}>
						Главная
					</Link>
				</li>
				<li>
					<a
						href='#tariffs'
						className={style.item}>
						Тарифы
					</a>
				</li>
				<li>
					<a
						href='#faq'
						className={style.item}>
						FAQ
					</a>
				</li>
			</ul>

			<Routes>
				<Route
					path='/page1'
					element={<Page1 />}
				/>
			</Routes>
		</>
	);
};

export default Navigation;
