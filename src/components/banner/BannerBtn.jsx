import React from 'react';
import Button from 'react-bootstrap/Button';
import style from './banner.module.css';

const banner__btn = {
	// Включить/выключить отображение компонента
	// display: 'none',
};

const BannerBtn = () => {
	return (
		<Button
			type='button'
			style={banner__btn}
			className={[style.btn__app, 'btn btn-primary'].join(' ')}>
			Запросить данные
		</Button>
	);
};

export default BannerBtn;
