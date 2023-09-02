import React from 'react';

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';
import style from './header.module.css';
import Navigation from './Navigation';
import RegU from './RegU';

// import { Routes, Route, Link } from "react-router-dom";

import logoImg from '../header/img/logo.png';

const header = {
	// Включить/выключить отображение компонента
	// display: 'none',

	position: 'fixed',
	left: '0',
	right: '0',
	width: '100%',
	backgroundColor: '#fff',
	zIndex: '40',
	userSelect: 'none',
};

const Header = () => {
	const [nav, setNav] = useState(false);
	return (
		<div style={header}>
			<div className={['container', style.h93px].join(' ')}>
				<div className={style.nologo}>
					<img
						src={logoImg}
						alt='logo'
					/>
				</div>
				<div className={nav ? [style.box, style.active].join(' ') : [style.box]}>
					<Navigation />
					<RegU />
					<div
						onClick={() => setNav(!nav)}
						className={style.burger}>
						{nav ? (
							<AiOutlineClose
								size={35}
								color='white'
								className={style.cross__hidden}
							/>
						) : (
							<AiOutlineMenu size={35} />
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
