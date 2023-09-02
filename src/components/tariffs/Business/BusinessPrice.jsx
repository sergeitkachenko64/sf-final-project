import Card from 'react-bootstrap/Card';
import style from '../tariffs.module.css';

const BusinessrPrice = () => {
	return (
		<div>
			<Card.Text className={style.price}>
				2 379 ₽ <strike className={style.strike}>3 700 ₽</strike>
			</Card.Text>
		</div>
	);
};

export default BusinessrPrice;
