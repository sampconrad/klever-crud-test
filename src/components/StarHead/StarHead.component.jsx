import React from 'react';
import ShootStar from '../../assets/shooting-star.svg';
import './StarHead.styles.scss';

import { Link, useLocation } from 'react-router-dom';

const StarHead = () => {
	const location = useLocation();

	return (
		<>
			<div className="wish-wallet-wrapper">
				<div className="starhead-container">
					<div className="starhead-icon">
						<img src={ShootStar} alt="klever-logo" />
					</div>
					<div className="starhead-text">Wish Wallet</div>
				</div>
				<div className="add-token-btn-container">
					{location.pathname === '/' && (
						<Link to="/add-token">
							<button className="btn-purple">Add Token</button>
						</Link>
					)}
				</div>
			</div>
		</>
	);
};

export default StarHead;
