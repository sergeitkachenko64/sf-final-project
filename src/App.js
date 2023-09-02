import { Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/reset.css';
import './styles/common.css';

import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Notfoundpage';

function App() {
	return (
		<>
			<Routes>
				<Route
					path='/'
					element={<Page1 />}
				/>
				<Route
					path='/page2'
					element={<Page2 />}
				/>
				<Route
					path='/page3'
					element={<Page3 />}
				/>
				<Route
					path='*'
					element={<Page4 />}
				/>
			</Routes>
		</>
	);
}

export default App;
