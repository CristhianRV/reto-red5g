export const dataFuction = () => {
	let count = 0;
	let data = [];

	while (count < 150) {
		const dataInit = {
			id: count,
			date: generator('date'),
			numberDes: generator('disbursement'),
			typeDoc: 'Cedula',
			numberDoc: generator('document'),
			amount: generator('amount'),
		};
		data.push(dataInit);
		count += 1;
	}

	return data;
};

const generator = (action) => {
	let year = '202';
	let month = '';
	let day = '';
	let date = '';
	let des = '';
	let doc = '';
	let cant = '';

	switch (action) {
		case 'date':
			year = year + String(Math.floor(Math.random() * 3 + 1));
			month = String(Math.floor(Math.random() * 12 + 1));
			day = String(Math.floor(Math.random() * 29 + 1));
			date = new Date(`${year}-${month}-${day}`);
			date = date.toLocaleString();
			date = date.replaceAll('/', '-').replace(',', ' ');
			return date;

		case 'disbursement':
			des = String(Math.floor(Math.random() * 10000000 + 1000000));
			return des;

		case 'document':
			doc = String(Math.floor(Math.random() * 1000000000 + 1000000000));
			return doc;

		case 'amount':
			cant = String(Math.floor(Math.random() * 1000000000 + 500));
			cant = cant.match(/.{1,3}(.$)?/g);
			cant = '$' + cant.toString().replaceAll(',', '.');
			return cant;

		default:
			console.log('No se imprimio nada');
	}
};

export const asigDate = (date) => {
	let month = '';
	let day = '';
	let year = '';
	let cont = 0;

	if (date.length > 11) {
		date = date.slice(0, -15);
	}
	for (let i = 0; i < date.length; i++) {
		if (!isNaN(date[i]) && cont === 0) day = day + date[i];
		if (!isNaN(date[i]) && cont === 1) month = month + date[i];
		if (date[i] !== ' ' && cont === 2) year = year + date[i];
		if (date[i] === '-') cont += 1;
	}

	const d1 = new Date(`${year}-${month}-${day}`);
	return d1;
};
