import React, { useContext } from 'react';
import './Home.styles.scss';
import { GlobalContext } from '../context/GlobalState';
import { Link } from 'react-router-dom';

const HomePage = () => {
	const { tokens } = useContext(GlobalContext);

	return (
		<>
			<div className="home-container">
				<div className="header-home"></div>
				<div className="table-head-container">
					<div className="table-head-left">Tokens</div>
					<div className="table-head-right">Balance</div>
				</div>
				<div className="token-list-container">
					<ul className="token-list-ul">
						{tokens.map((token) => (
							<li key={token.id} className="token-list-item">
								<div className="token-list-item-left">
									<Link to={`/edit-token/${token.id}`}>
										<div className="edit-icon material-symbols-outlined">
											edit_square
										</div>
									</Link>
									<div className="token-name">{token.name}</div>
								</div>
								<div className="token-balance">
									{(
										Math.round(token.balance * 100 + Number.EPSILON) / 100
									).toLocaleString()}
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</>
	);
};

export default HomePage;
