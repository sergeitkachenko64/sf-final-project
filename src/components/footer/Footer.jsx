import React from 'react';
import footerLogo from './img/logo_w.png';
import style from './footer.module.css';

const styles = {
	footer: {
		// Включить/выключить отображение компонента
		// display: 'none',

		height: '137px',
		maxWidth: '1440px',
		margin: '0 auto',
		marginBottom: '1px',
		backgroundColor: '#029491',
	},

	row: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		height: ' 100%',
		padding: '0 5px',
	},

	textTop: {
		lineHeight: '1.3',
		margin: '0',
	},
};

const Footer = () => {
	return (
		<footer style={styles.footer}>
			<div className='container p-0'>
				<div style={styles.row}>
					<div>
						<img
							src={footerLogo}
							alt='img'
							className={style.image}
						/>
					</div>
					<div className={style.text}>
						<p style={styles.textTop}>
							г. Москва, Цветной б-р, 40
							<br />
							+7 495 771 21 11
							<br />
							info@skan.ru
						</p>
						<p className={style.copyright}>Copyright. 2022</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
