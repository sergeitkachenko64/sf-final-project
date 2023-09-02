import React from 'react';

import Button from 'react-bootstrap/Button';
import style from './header.module.css';

const ButtonDisabled = () => {
	return (
		<>
			<Button
				disabled
				variant='primary'
				className={['btn btn-secondary btn-sm', style.btn__app].join(' ')}>
				Войти
			</Button>
		</>
	);
};

export default ButtonDisabled;
