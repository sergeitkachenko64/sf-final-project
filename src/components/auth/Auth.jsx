import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Page3 from '../../pages/Page3';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import style from './auth.module.css';

import authImg from './img/key.svg';
import recEnter from './img/rectangle1.svg';
import recReg from './img/rectangle2.svg';
import gooImg from './img/google.svg';
import fbkImg from './img/facebook.svg';
import yanImg from './img/yandex.svg';
import lockImg from './img/lock.svg';

const auth = {
	// Включить/выключить отображение компонента
	// display: 'none',

	paddingTop: '117px',
	marginBottom: '5.2%',
};

const Auth = () => {
	return (
		<section style={auth}>
			<div className={['container p-0', style.mt45].join(' ')}>
				<div className={style.content}>
					<div className={style.left}>
						<div className={style.text}>
							<h1>Для оформления подписки на тариф небходимо авторизоваться.</h1>
						</div>
						<div className={style.wrapper}>
							<img
								src={authImg}
								alt='img'
								className={style.image}
							/>
						</div>
					</div>
					<div className={style.right}>
						<img
							src={lockImg}
							alt='lock'
							className={style.lock}
						/>
						<div className={style.block1}>
							<p className={style.enter}>Войти</p>
							<p className={style.reg}>Зарегистрироваться</p>
						</div>
						<div className={style.block2}>
							<img
								src={recEnter}
								alt='line'
								className={style.recEnter}
							/>
							<img
								src={recReg}
								alt='line'
								className={style.recReg}
							/>
						</div>
						<Form className={style.form}>
							<Form.Group
								className='mb-3'
								controlId='formBasicLogin'>
								<Form.Label className={style.lable}>Логин или номер телефона:</Form.Label>
								<Form.Control
									type='login'
									placeholder=''
								/>
							</Form.Group>
							<Form.Group
								className='mb-3'
								controlId='formBasicPassword'>
								<Form.Label className={[style.lable, style.mt7]}>Пароль:</Form.Label>
								<Form.Control
									type='password'
									placeholder=''
								/>
							</Form.Group>
							<Link to='/page3'>
								<Button
									variant='primary'
									type='submit'
									className={style.button}>
									Войти
								</Button>
							</Link>
							<Routes>
								<Route
									path='/page3'
									element={<Page3 />}
								/>
							</Routes>
						</Form>
						<a
							href='##'
							className={style.recoverPwd}>
							Восстановить пароль
						</a>
						<div className={style.bottom}>
							<p className={style.bottom__txt}>Войти через:</p>
							<ul className={style.social}>
								<li>
									<a href='#google'>
										<img
											src={gooImg}
											alt='google img'
											className={style.item}
										/>
									</a>
								</li>
								<li>
									<a href='#facebook'>
										<img
											src={fbkImg}
											alt='facebook img'
											className={style.item}
										/>
									</a>
								</li>
								<li>
									<a href='#yandex'>
										<img
											src={yanImg}
											alt='yandex img'
											className={style.item}
										/>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Auth;
