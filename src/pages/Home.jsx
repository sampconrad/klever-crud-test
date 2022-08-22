import React from 'react';
import Heading from '../components/Heading/Heading';
import TokenList from '../components/TokenList/TokenList';
import './Home.styles.scss';

const Home = () => {
	return (
		<>
			<div className="home-container">
				<div className="header-home"></div>
				<Heading />
				<TokenList />
			</div>
		</>
	);
};

export default Home;
