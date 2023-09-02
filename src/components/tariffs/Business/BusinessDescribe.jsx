import Card from 'react-bootstrap/Card';
import style from '../tariffs.module.css';

import mark from '../img/mark.svg';
import { Image } from 'react-bootstrap';

const BeginnerDescribe = () => {
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
					Все пункты тарифа Pro
				</li>
				<li className={style.list_item}>
					<Image
						src={mark}
						alt='image'
						style={{ margin: '0 8px 0 0' }}
					/>
					Безлимитное количество запросов
				</li>
				<li className={style.list_item}>
					<Image
						src={mark}
						alt='image'
						style={{ margin: '0 8px 0 0' }}
					/>
					Приоритетная поддержка
				</li>
			</ul>
		</Card.Text>
	);
};

export default BeginnerDescribe;
