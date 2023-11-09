import style from '../css/paginated.module.css';

const Paginated = ({ setCurrent, current, setRecord, record, data }) => {
	const long = Math.ceil(data.length / record);

	const handlerPagination = (e) => {
		const name = e.target.name;

		if (name === 'next') {
			if (long !== current) setCurrent(current + 1);
		}

		if (name === 'pre') {
			if (current > 1) setCurrent(current - 1);
		}
	};

	const handlerInput = (e) => {
		const value = parseInt(e.target.value);
		if (value > 1 && value <= long) setCurrent(value);
	};

	const handlerRecord = (e) => {
		const value = e.target.value;
		setRecord(value);
	};

	return (
		<div className={style.container}>
			<div className={style.containerPaginated}>
				<div className={style.btnPagination}>
					<button
						name="pre"
						onClick={handlerPagination}
						className={style.btn1}
					></button>
					<input type="number" onChange={handlerInput} value={current} />
					<p>{`de ${long}`}</p>
					<button
						name="next"
						onClick={handlerPagination}
						className={style.btn2}
					></button>
				</div>
				<div className={style.select}>
					<select onChange={handlerRecord}>
						<option value={30}>30</option>
						<option value={25}>25</option>
						<option value={20}>20</option>
						<option value={15}>15</option>
					</select>
					<span>Registros por página</span>
				</div>
			</div>
		</div>
	);
};

export default Paginated;
