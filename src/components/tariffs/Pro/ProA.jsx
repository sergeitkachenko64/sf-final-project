import React from 'react';
import Card from 'react-bootstrap/Card';
import style from '../tariffs.module.css';
import CarrentTariff from '../CarrentTariff';
import ProHeader from './ProHeader';
import ProPrice from './ProPrice';
import ProDescribe from './ProDescribe';
import ButtonDisabled from '../ButtonDisabled';

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
				className={[style.body, style.body__card2].join(' ')}>
				<div>
					<div className={style.element}>
						<CarrentTariff />
					</div>
					<ProPrice />
				</div>
				<div className={style.footer}>
					<ProDescribe />
					<ButtonDisabled />
				</div>
			</Card.Body>
		</Card>
	);
};

export default ProA;
