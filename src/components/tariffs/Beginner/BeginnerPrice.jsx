import Card from 'react-bootstrap/Card';
import style from '../tariffs.module.css';

const BeginnerPrice = () => {
	return (
		<div>
			<Card.Text className={style.price}>
				799 ₽ <strike className={style.strike}>1 200 ₽</strike>
			</Card.Text>
			<Card.Text className={style.card__txt}>
				<p>или 150 ₽/мес. при рассрочке на 24 мес.</p>
			</Card.Text>
		</div>
	);
};

export default BeginnerPrice;
