import Card from 'react-bootstrap/Card';
import style from '../tariffs.module.css';

import mark from '../img/mark.svg';
import { Image } from 'react-bootstrap';

const ProDescribe = () => {
	return (
		<Card.Text style={{ margin: '0' }}>
			<p className={style.tariff__description}>В тариф входит:</p>
			<ul style={{ margin: '0', padding: '0' }}>
				<li className={style.list_item}>
					<Image
						src={mark}
						alt='image'
						style={{ margin: '0 8px 0 0' }}
					/>
					Все пункты тарифа Beginner
				</li>
				<li className={style.list_item}>
					<Image
						src={mark}
						alt='image'
						style={{ margin: '0 8px 0 0' }}
					/>
					Экспорт истории
				</li>
				<li className={style.list_item}>
					<Image
						src={mark}
						alt='image'
						style={{ margin: '0 8px 0 0' }}
					/>
					Рекомендации по приоритетам
				</li>
			</ul>
		</Card.Text>
	);
};

export default ProDescribe;
