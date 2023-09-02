import Card from 'react-bootstrap/Card';
import style from '../tariffs.module.css';
import target from '../img/target.svg';

const ProHeader = () => {
	return (
		<Card.Header className={[style.header, style.card2, 'd-flex'].join(' ')}>
			<div>
				<Card.Title className={style.caption}>Pro</Card.Title>
				<Card.Text className={style.card__txt}>Для HR и фрилансеров</Card.Text>
			</div>
			<Card.Img
				variant='right'
				src={target}
				alt='image'
				className={style.img2}
			/>
		</Card.Header>
	);
};

export default ProHeader;
