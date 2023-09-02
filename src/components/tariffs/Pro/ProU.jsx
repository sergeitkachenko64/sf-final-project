import React from 'react';
import Card from 'react-bootstrap/Card';
import style from '../tariffs.module.css';
import CarrentTariff from '../CarrentTariff';
import ProHeader from './ProHeader';
import ProPrice from './ProPrice';
import ProDescribe from './ProDescribe';
import ButtonActive from '../ButtonActive';

const ProA = () => {
	return (
		<Card
			className={style.card__app}
			style={{
				width: '23.2rem',
				minHeight: '540px',
			}}>
			<ProHeader />
			<Card.Body
				style={{ padding: '12px 15px 24px' }}
				className={style.body}>
				<div>
					<div className={[style.element, style.hidden].join(' ')}>
						<CarrentTariff />
					</div>
					<ProPrice />
				</div>
				<div className={style.footer}>
					<ProDescribe />
					<ButtonActive />
				</div>
			</Card.Body>
		</Card>
	);
};

export default ProA;
