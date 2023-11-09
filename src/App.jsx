import { Routes, Route } from 'react-router-dom';
import  Loggin  from './views/Loggin';
import  Home from './views/Home';
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
