import './picture.css';
import picImg from './img/img2.svg';

const Picture = () => {
	return (
		<section className='picture'>
			<div className='container'>
				<div className='wrapper'>
					<img
						src={picImg}
						alt='img'
						className='picture__img'
					/>
				</div>
			</div>
		</section>
	);
};

export default Picture;
