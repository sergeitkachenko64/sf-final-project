import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './custom.css';
import style from './carousel.module.css';

import Slider from 'react-slick';

function PrevArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{ ...style, display: 'block' }}
			onClick={onClick}
		/>
	);
}

function NextArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{ ...style, display: 'block' }}
			onClick={onClick}
		/>
	);
}

const Carousel = () => {
	var settings = {
		dots: false,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 4000,
		speed: 800,
		slidesToShow: 3,
		slidesToScroll: 1,
		initialSlide: 0,
		prevArrow: <PrevArrow />,
		nextArrow: <NextArrow />,
		responsive: [
			{
				breakpoint: 1070,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 720,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<section className={['container p-0', style.mb70].join(' ')}>
			<div className={style.carousel}>
				<h1 className={style.text}>Почему именно мы</h1>
				<Slider {...settings}>
					<div className={style.box}>
						<div className={[style.item, style.i1].join(' ')}></div>
						<p>Высокая и оперативная скорость обработки заявки</p>
					</div>
					<div className={style.box}>
						<div className={[style.item, style.i2].join(' ')}></div>
						<p>Огромная комплексная база данных, обеспечивающая объективный ответ на запрос</p>
					</div>
					<div className={style.box}>
						<div className={[style.item, style.i3].join(' ')}></div>
						<p>
							Защита конфеденциальных сведений, не подлежащих разглашению по федеральному
							законодательству
						</p>
					</div>
					<div className={style.box}>
						<div className={[style.item, style.i1].join(' ')}></div>
						<p>Высокая и оперативная скорость обработки заявки</p>
					</div>
					<div className={style.box}>
						<div className={[style.item, style.i2].join(' ')}></div>
						<p>Огромная комплексная база данных, обеспечивающая объективный ответ на запрос</p>
					</div>
					<div className={style.box}>
						<div className={[style.item, style.i3].join(' ')}></div>
						<p>
							Защита конфеденциальных сведений, не подлежащих разглашению по федеральному
							законодательству
						</p>
					</div>
				</Slider>
			</div>
		</section>
	);
};

export default Carousel;
