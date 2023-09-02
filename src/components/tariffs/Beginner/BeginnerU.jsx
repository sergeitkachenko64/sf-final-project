import React from 'react';
import Card from 'react-bootstrap/Card';
import style from '../tariffs.module.css';
import CarrentTariff from '../CarrentTariff';
import BeginnerHeader from './BeginnerHeader';
import BeginnerPrice from './BeginnerPrice';
import BeginnerDescribe from './BeginnerDescribe';
import ButtonActive from '../ButtonActive';

const BeginnerA = () => {
	return (
		<Card
			className={style.card__app}
			style={{
				width: '23.2rem',
				minHeight: '540px',
			}}>
			<BeginnerHeader />
			<Card.Body
				style={{ padding: '12px 15px 24px' }}
				className={style.body}>
				<div>
					<div className={[style.element, style.hidden].join(' ')}>
						<CarrentTariff />
					</div>
					<BeginnerPrice />
				</div>
				<div className={style.footer}>
					<BeginnerDescribe />
					<ButtonActive />
				</div>
			</Card.Body>
		</Card>
	);
};

export default BeginnerA;
