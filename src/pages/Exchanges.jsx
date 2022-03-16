import { Col, Row } from 'antd';

const Exchanges = () => {
	return (
		<>
			<Row>
				<Col span={6}>Exchanges</Col>
				<Col span={6}>24H Trade Volume</Col>
				<Col span={6}>Markets</Col>
				<Col span={6}>Change</Col>
			</Row>
			{/* TODO: Remove styles before working on this page */}
			<Row style={{ minHeight: '90vh' }}>
				<h1 style={{ fontSize: '2rem', textAlign: 'center' }}>Coming Soon...</h1>
			</Row>
		</>
	);
};

export default Exchanges;
