import React from 'react';
import './Home.styles.scss';
import Heading from '../components/Heading/Heading.component';
import TokenList from '../components/TokenList/TokenList.component';

const Home = () => {
	return (
		<div className="home-container">
			<div className="header-home"></div>
			<Heading />
			<TokenList />
		</div>
	);
};

export default Home;
