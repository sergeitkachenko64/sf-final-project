import style from './banner.module.css';

const BannerTxt = () => {
	return (
		<div className={style.top32}>
			<h1 className={[style.text__large, 'm-0'].join(' ')}>Сервис по поиску</h1>
			<h1 className={[style.text__large, 'm-0'].join(' ')}>публикаций</h1>
			<h1 className={[style.text__large, 'm-0'].join(' ')}>о компании</h1>
			<h1 className={[style.text__large, 'm-0'].join(' ')}>по её ИНН</h1>
			<div className={style.t20b70}>
				<p className={style.text__small}>
					Комплексный анализ публикаций, получение данных в <br /> формате PDF на электронную почту.
				</p>
			</div>
		</div>
	);
};

export default BannerTxt;
