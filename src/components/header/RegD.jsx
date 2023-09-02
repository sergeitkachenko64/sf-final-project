import ButtonDisabled from './ButtonDisabled';
import style from './header.module.css';
import recImg from '../header/img/rectangle.svg';

const RegU = () => {
	return (
		<div className={style.reg}>
			<a
				href='##'
				className={style.txt}>
				Зарегистрироваться
			</a>
			<img
				src={recImg}
				alt='|'
				className={style.grey}
			/>
			<ButtonDisabled />
		</div>
	);
};

export default RegU;
