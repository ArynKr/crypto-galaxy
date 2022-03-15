import React from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
	Route,
	Routes,
} from 'react-router-dom';
import App from './App';
import {
	Home,
	Exchanges,
	CryptoDetails,
	Cryptocurrencies,
	News,
} from './pages';

import 'antd/dist/antd.css';

ReactDOM.render(
	<Router>
		<Routes>
			<Route path='/' element={<App />}>
				<Route index element={<Home />} />
				<Route path='exchanges' element={<Exchanges />} />
				<Route
					path='cryptocurrencies'
					element={<Cryptocurrencies />}
				/>
				<Route path='crypto/:coinId' element={<CryptoDetails />} />
				<Route path='news' element={<News />} />
			</Route>
		</Routes>
	</Router>,
	document.getElementById('root')
);
