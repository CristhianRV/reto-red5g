import style from '../css/loggin.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { user } from '../utils/user.js';
const Loggin = () => {
	const navigate = useNavigate();
	const [userValidate, setUserValidate] = useState({
		user: '',
		password: '',
	});

	const [message, setMessage] = useState('');

	const handlerChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;

		setUserValidate({
			...userValidate,
			[name]: value,
		});
	};

	const handlerSummit = () => {
		if (userValidate.user.length > 0 && userValidate.password.length > 0) {
			if (
				user.user === userValidate.user &&
				user.password === userValidate.password
			) {
				navigate('/home');
				setMessage('');
				setUserValidate({
					user: '',
					password: '',
				});
			}
		}
		if (!userValidate.user) setMessage('Ingrese un usuario');
		else if (!userValidate.password) setMessage('Ingrese la contraseña');
		else {
			setMessage('usuario/contraseña incorrecto');
		}
	};

	return (
		<div className={style.container}>
			<div className={style.containerLoggin}>
				<div className={style.contImg}>
					<img
						className={style.img1}
						src="media/image/sombras.svg"
						alt="sombras"
					/>
					<img
						className={style.img2}
						src="media/image/sombras.svg"
						alt="sombras"
					/>
					<img
						className={style.img3}
						src="media/image/elipse.svg"
						alt="elipse"
					/>
					<img
						className={style.img4}
						src="media/image/elipse.svg"
						alt="elipse"
					/>

					<img
						className={style.img5}
						src="media/image/burbujas.svg"
						alt="burbujas"
					/>

					<img
						className={style.img6}
						src="media/image/burbujas.svg"
						alt="burbujas"
					/>
				</div>
				<div className={style.containerForm}>
					<div className={style.titleForm}>
						<img src="media/image/logo.svg" alt="logo" />
						<h3>Sufipay</h3>
						<h5>Administrador comercial</h5>
					</div>
					<div className={style.form}>
						<div className={style.containerInput}>
							<input
								className={
									message && !userValidate.user ? style.validation : ''
								}
								name="user"
								value={userValidate.user}
								onChange={handlerChange}
								type="text"
								required
								autoComplete="off"
							/>
							<span className={style.user}>Usuario</span>
						</div>
						<div className={style.containerInput}>
							<input
								className={
									message && !userValidate.password ? style.validation : ''
								}
								name="password"
								value={userValidate.password}
								onChange={handlerChange}
								type="password"
								required
								autoComplete="off"
							/>
							<span className={style.password}>Contraseña</span>
						</div>
					</div>
					<p className={message ? style.message1 : style.message2}>{message}</p>
					<button className={style.button} onClick={handlerSummit}>
						INGRESAR
					</button>
					<a>No recuerdo mi contraseña</a>
				</div>
			</div>
		</div>
	);
};

export default Loggin;
