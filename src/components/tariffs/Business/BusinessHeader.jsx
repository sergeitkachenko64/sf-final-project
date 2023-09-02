import Card from 'react-bootstrap/Card';
import style from '../tariffs.module.css';
import notebook from '../img/notebook.svg';

const BusinessHeader = () => {
	return (
		<Card.Header className={[style.header, style.card3, 'd-flex'].join(' ')}>
			<div>
				<Card.Title className={style.caption}>Business</Card.Title>
				<Card.Text className={style.card__txt}>Для корпоративных клиентов</Card.Text>
			</div>
			<Card.Img
				variant='right'
				src={notebook}
				alt='image'
				className={style.img3}
			/>
		</Card.Header>
	);
};

export default BusinessHeader;
