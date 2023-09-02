import React from 'react';
import Card from 'react-bootstrap/Card';
import style from '../tariffs.module.css';
import CarrentTariff from '../CarrentTariff';
import BusinessHeader from './BusinessHeader';
import BusinessPrice from './BusinessPrice';
import BusinessDescribe from './BusinessDescribe';
import ButtonDisabled from '../ButtonDisabled';

const BusinessA = () => {
	return (
		<Card
			className={style.card__app}
			style={{
				width: '23.2rem',
				minHeight: '540px',
			}}>
			<BusinessHeader />
			<Card.Body
				style={{ padding: '12px 15px 24px' }}
				className={[style.body, style.body__card3].join(' ')}>
				<div>
					<div className={style.element}>
						<CarrentTariff />
					</div>
					<BusinessPrice />
				</div>
				<div className={style.footer}>
					<BusinessDescribe />
					<ButtonDisabled />
				</div>
			</Card.Body>
		</Card>
	);
};

export default BusinessA;
