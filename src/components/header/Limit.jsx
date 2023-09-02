import React from 'react';
import style from './header.module.css';

const Limit = () => {
	return (
		<div className={style.limit}>
			<div className={style.limit__txt}>
				<p style={{ margin: 0 }}>Использовано компаний:</p>
				<p style={{ margin: 0 }}>Лимит по компаниям:</p>
			</div>
			<div className={style.limit__number}>
				<p style={{ margin: 0 }}>34</p>
				<p style={{ margin: 0, color: '#8AC540' }}>100</p>
			</div>
		</div>
	);
};

export default Limit;
