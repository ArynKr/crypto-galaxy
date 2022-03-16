import React from 'react';
import { Spin } from 'antd';
const Loader = () => {
	return (
		<div className='spin'>
			<Spin size='large' />
		</div>
	);
};

export default Loader;
