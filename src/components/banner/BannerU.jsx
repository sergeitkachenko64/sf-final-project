import React from 'react';
import BannerTxt from './BannerTxt';
import BannerImg from './BannerImg';
import style from './banner.module.css';

const banner = {
	// Включить/выключить отображение компонента
	// display: 'none',

	paddingTop: '117px',
	marginBottom: '5.2%',
};

const Banner = () => {
	return (
		<section style={banner}>
			<div className='container p-0'>
				<div className={style.content}>
					<div className={style.text}>
						<BannerTxt />
					</div>
					<BannerImg />
				</div>
			</div>
		</section>
	);
};

export default Banner;
