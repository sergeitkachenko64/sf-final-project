import bannerImg from './img/banner.jpg';
import style from './banner.module.css';

const BannerImg = () => {
	return (
		<div className={style.wrapper}>
			<img
				src={bannerImg}
				alt='img'
				className={style.image}
			/>
		</div>
	);
};

export default BannerImg;
