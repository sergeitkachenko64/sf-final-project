import style from './tariffs.module.css';
import BeginnerU from './Beginner/BeginnerU';
import ProU from './Pro/ProU';
import BusinessU from './Business/BusinessU';

const tariffs = {
	// Включить/выключить отображение компонента
	// display: 'none',

	userSelect: 'none',
	marginBottom: '5.3%',
};

const Tariffs = () => {
	return (
		<section style={tariffs}>
			<div className='container p-0'>
				<h1 className={style.title}>Наши тарифы</h1>
				<div className={[style.group, 'd-flex'].join(' ')}>
					<BeginnerU />
					<ProU />
					<BusinessU />
				</div>
			</div>
		</section>
	);
};

export default Tariffs;
