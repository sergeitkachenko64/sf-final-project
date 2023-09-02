import ButtonPrim from './ButtonPrim';
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
			/>
			<ButtonPrim />
		</div>
	);
};

export default RegU;
