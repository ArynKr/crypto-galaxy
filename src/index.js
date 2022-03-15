import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import { Home, Exchanges, CryptoDetails, Cryptocurrencies, News } from './pages';
import { Provider } from 'react-redux';
import store from './app/store';

import 'antd/dist/antd.css';

ReactDOM.render(
	<Router>
		<Provider store={store}>
			<Routes>
				<Route path='/' element={<App />}>
					<Route index element={<Home />} />
					<Route path='exchanges' element={<Exchanges />} />
					<Route path='cryptocurrencies' element={<Cryptocurrencies />} />
					<Route path='crypto/:coinId' element={<CryptoDetails />} />
					<Route path='news' element={<News />} />
				</Route>
			</Routes>
		</Provider>
	</Router>,
	document.getElementById('root')
);
