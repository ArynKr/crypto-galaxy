import React from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import { Footer, Navbar } from './components';

import './App.css';

const App = () => {
	return (
		<div className='app'>
			<nav className='navbar'>
				<Navbar />
			</nav>
			<main className='main'>
				<Layout>
					<div className='routes'>
						<Outlet />
					</div>
				</Layout>
				<footer>
					<Footer />
				</footer>
			</main>
		</div>
	);
};

export default App;
