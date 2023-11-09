import { Routes, Route } from 'react-router-dom';
import { Home, Loggin } from './views';
import './App.css';

function App() {
	return (
		<div>
			<Routes>
				<Route exact path="/" element={<Loggin />} />
				<Route path="/home" element={<Home />} />
			</Routes>
		</div>
	);
}

export default App;
