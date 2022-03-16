import React, { useState } from 'react';
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
import { useGetCryptosQuery } from '../services/cryptoApi';
import { Loader } from '../components';

const News = ({ simplified }) => {
	const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';
	const { Text, Title } = Typography;
	const { Option } = Select;

	const [newsCategory, setNewsCategory] = useState('Cryptocurrency');

	const { data: cryptoNews, isFetching } = useGetCryptoNewsQuery({
		newsCategory,
		count: simplified ? 6 : 12,
	});
	const { data } = useGetCryptosQuery(100);

	if (isFetching) return <Loader />;

	return (
		<Row gutter={[24, 24]}>
			{!simplified && (
				<Col span={24}>
					<Select
						showSearch
						className='select-news'
						placeholder='Select a Crypto'
						optionFilterProp='children'
						onChange={(value) => setNewsCategory(value)}
						filterOption={(input, option) =>
							option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
						}
						value='Cryptocurrency'
					>
						<Option key='$' value='Cryptocurrency'>
							Cryptocurrency
						</Option>
						{data?.data?.coins.map((coin, i) => (
							<Option key={i} value={coin.name}>
								{coin.name}
							</Option>
						))}
					</Select>
				</Col>
			)}

			{cryptoNews?.value.map((news, i) => (
				<Col key={i} xs={24} sm={12} lg={8}>
					<Card className='news-card' hoverable>
						<a href={news.url} target='_blank' rel='noreferrer'>
							<div className='news-image-container'>
								<Title className='news-title' level={4}>
									{news.name}
								</Title>
								<img
									style={{ maxWidth: '200px', maxHeight: '100px' }}
									src={news?.image?.thumbnail?.contentUrl || demoImage}
									alt='news'
								/>
							</div>
							<p>
								{news.description > 100
									? `${news.description.substring(0, 100)}...`
									: news.description}
							</p>
							<div className='provider-container' style={{ marginTop: '2rem' }}>
								<div>
									<Avatar
										src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage}
										alt=''
									/>
									<Text className='provider-name'>{news.provider[0]?.name}</Text>
								</div>
								<Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
							</div>
						</a>
					</Card>
				</Col>
			))}
		</Row>
	);
};

export default News;
