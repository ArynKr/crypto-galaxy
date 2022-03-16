import React from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import logo from '../assets/images/cryptocurrency.png';
import {
	BulbOutlined,
	FundOutlined,
	HomeOutlined,
	MoneyCollectOutlined,
	MonitorOutlined,
} from '@ant-design/icons';

const Navbar = () => {
	return (
		<div className='nav-container'>
			<div className='logo-container'>
				<Avatar src={logo} />
				<Typography.Title level={2} className='logo'>
					<Link to='/'>Crypto Galaxy</Link>
				</Typography.Title>
			</div>
			<Menu theme='dark'>
				<Menu.Item icon={<HomeOutlined />} key={1}>
					<Link to='/'>Home</Link>
				</Menu.Item>
				<Menu.Item icon={<FundOutlined />} key={2}>
					<Link to='/cryptocurrencies'>Cryptocurrencies</Link>
				</Menu.Item>
				<Menu.Item icon={<MoneyCollectOutlined />} key={3}>
					<Link to='/exchanges'>Exchanges</Link>
				</Menu.Item>
				<Menu.Item icon={<BulbOutlined />} key={4}>
					<Link to='/news'>News</Link>
				</Menu.Item>
			</Menu>
		</div>
	);
};

export default Navbar;
