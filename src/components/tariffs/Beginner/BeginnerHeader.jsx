import Card from 'react-bootstrap/Card';
import style from '../tariffs.module.css';
import lamp from '../img/lamp.svg';

const BeginnerHeader = () => {
	return (
		<Card.Header className={[style.header, style.card1, 'd-flex'].join(' ')}>
			<div>
				<Card.Title className={style.caption}>Beginner</Card.Title>
				<Card.Text className={style.card__txt}>Для небольшого исследования</Card.Text>
			</div>
			<Card.Img
				variant='right'
				src={lamp}
				alt='image'
				className={style.img1}
			/>
		</Card.Header>
	);
};

export default BeginnerHeader;
