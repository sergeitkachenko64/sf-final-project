import Card from 'react-bootstrap/Card';
import style from '../tariffs.module.css';

const ProPrice = () => {
	return (
		<div>
			<Card.Text className={style.price}>
				1299 ₽ <strike className={style.strike}>2 600 ₽</strike>
			</Card.Text>
			<Card.Text className={style.card__txt}>
				<p>или 279 ₽/мес. при рассрочке на 24 мес.</p>
			</Card.Text>
		</div>
	);
};

export default ProPrice;
