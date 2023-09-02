import Button from 'react-bootstrap/Button';
import style from './tariffs.module.css';

const ButtonActive = () => {
	return (
		<Button
			variant='primary'
			style={{ padding: '14px' }}
			className={style.button__text_white}>
			Подробнее
		</Button>
	);
};

export default ButtonActive;
