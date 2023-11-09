import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from '../css/home.module.css';
import { dataFuction, asigDate } from '../utils/functions';
// import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import the default styles
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

import Paginated from '../components/Paginated';

const Home = () => {
	const [current, setCurrent] = useState(1);
	const [record, setRecord] = useState(30);
	const [data] = useState(dataFuction());
	const [data2, setData2] = useState(data);
	const navigate = useNavigate();

	let dataFilter = data2.slice((current - 1) * record, current * record);

	const [filter, setFilter] = useState({
		typeDoc: '',
		numberDoc: '',
		numberDes: '',
		date1: '',
		date2: '',
	});

	const handlerChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;

		setFilter({
			...filter,
			[name]: value,
		});

		if (name === 'date1' || name === 'date2') handlerFilter(name, value);
		handlerFilter();
	};

	const handlerFilter = async (name, value) => {
		const value1 = name === 'date1' && value ? value : filter.date1;
		const value2 = name === 'date2' && value ? value : filter.date2;
		const d2 = asigDate(value1);
		const d3 = asigDate(value2);
		let searchData = [];

		data.forEach((element) => {
			const d1 = asigDate(element.date);

			if (
				element.typeDoc === filter.typeDoc &&
				element.numberDoc === filter.numberDoc &&
				element.numberDes === filter.numberDes &&
				d1 >= d2 &&
				d1 <= d3
			) {
				searchData = [...searchData, element];
			}
		});
		if (
			searchData.length > 0 &&
			filter.typeDoc &&
			filter.numberDoc &&
			filter.numberDes &&
			filter.date1 &&
			filter
		) {
			setData2(searchData);
		} else {
			setData2(data);
		}
	};
	const handlerClear = () => {
		const select = document.getElementById('select');
		select.value = '';
		setFilter({
			typeDoc: '',
			numberDoc: '',
			numberDes: '',
			date1: '',
			date2: '',
		});
		setData2(data);
	};

	const handlerExit = () => {
		navigate('/');
	};

	return (
		<div className="container">
			<div className={style.containerHome}>
				<div className={style.title}>
					<div>
						<img src="src/media/image/logo.svg" alt="logo" />
					</div>
					<div className={style.exitSesion} onClick={handlerExit}>
						<h6>Cerrar sesión</h6>
						<span></span>
					</div>
				</div>

				<div className={style.filters}>
					{filter.typeDoc && (
						<button onClick={handlerClear} className={style.delete}>
							x
						</button>
					)}
					{filter.numberDoc && (
						<button onClick={handlerClear} className={style.delete}>
							x
						</button>
					)}
					{filter.numberDes && (
						<button onClick={handlerClear} className={style.delete}>
							x
						</button>
					)}
					{filter.date1 && (
						<button onClick={handlerClear} className={style.delete}>
							x
						</button>
					)}
					{filter.date2 && (
						<button onClick={handlerClear} className={style.delete}>
							x
						</button>
					)}
					<div className={style.filterButtons}>
						<h4>Mis desembolsos</h4>
						<button>
							<span></span> Descargar
						</button>
					</div>
					<div className={style.optionFilter}>
						<div className={style.div}>
							<select
								id="select"
								name="typeDoc"
								onChange={handlerChange}
								required
							>
								<option value=""></option>
								<option value="Cedula">Cédula</option>
								<option value="Licencia">Licencia</option>
								<option value="P.P">passaporte</option>
							</select>
							<span className={style.span}>Tipo de doc.</span>
							<span className={style.btnSelect}></span>
						</div>
						<div className={style.div}>
							<input
								className={style.inputs}
								type="text"
								name="numberDoc"
								value={filter.numberDoc}
								onChange={handlerChange}
								required
							/>
							<span className={style.span}>Numero de documento</span>
						</div>

						<div className={style.div}>
							<input
								className={style.inputs}
								type="text"
								name="numberDes"
								value={filter.numberDes}
								onChange={handlerChange}
								required
							/>
							<span className={style.span}>Numero de desembolso</span>
						</div>
						<div className={style.div}>
							{/* <DatePicker
							onMouseEnter={() => console.log('h1')}
							onMouseLeave={() => console.log('h2')}
							className={style.date}
							selected={filter.date1}
							onChange={(date) => setFilter({ ...filter, date1: date })}
							showYearDropdown
							dateFormat="MM/dd/yyyy"
						/> */}
							<input
								name="date1"
								type="text"
								className={style.date}
								value={filter.date1}
								onChange={handlerChange}
								autoComplete="off"
								required
							/>
							<span className={style.span}>Desde</span>
							<span className={style.buttonDate}></span>
						</div>
						<div className={style.div}>
							{/* <DatePicker
								className={style.date}
								selected={filter.date2}
								onChange={(date) => setFilter({ ...filter, date2: date })}
								showYearDropdown
								dateFormat="MM/dd/yyyy"
								required
							/> */}
							<input
								name="date2"
								type="text"
								className={style.date}
								value={filter.date2}
								onChange={handlerChange}
								autoComplete="off"
								required
							/>
							<span className={style.span}>Hasta</span>
							<span className={style.buttonDate}></span>
						</div>
					</div>
				</div>
				<div className={style.containerTable}>
					<div className={style.tableHead}>
						<div className={style.head}>
							<p className={style.th1}>Fecha y Hora</p>
							<p className={style.th2}>Número de desembolso</p>
							<p className={style.th3}>Tipo de documento</p>
							<p className={style.th4}>Número de documento</p>
							<p className={style.th5}>Monto</p>
						</div>
					</div>
					<div className={style.tableBody}>
						<div className={style.body}>
							{dataFilter.map((e) => {
								return (
									<div className={e.id % 2 ? style.td1 : style.td2} key={e.id}>
										<div>
											<p className={style.th1}>{e.date}</p>
											<p className={style.th2}>{e.numberDes}</p>
											<p className={style.th3}>{e.typeDoc}</p>
											<p className={style.th4}>{e.numberDoc}</p>
											<p className={style.th5}>{e.amount}</p>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
				<div className={style.pagination}>
					<Paginated
						setCurrent={setCurrent}
						current={current}
						data={data2}
						setRecord={setRecord}
						record={record}
					/>
				</div>
			</div>
		</div>
	);
};

export default Home;
