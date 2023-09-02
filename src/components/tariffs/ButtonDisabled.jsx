import Button from 'react-bootstrap/Button';
import style from './tariffs.module.css';

const ButtonDisabled = () => {
	return (
		<Button
			variant='secondary'
			style={{ padding: '14px' }}
			className={[style.button__text_black, 'disabled'].join(' ')}>
			Перейти в личный кабинет
		</Button>
	);
};

export default ButtonDisabled;
