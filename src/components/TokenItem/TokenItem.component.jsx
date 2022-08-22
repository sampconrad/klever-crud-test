import React from 'react';
import './TokenItem.styles.scss';
import { Link } from 'react-router-dom';

const TokenItem = ({ tokenId, tokenName, tokenBalance }) => {
	const formatedBalance = (
		Math.round(tokenBalance * 100 + Number.EPSILON) / 100
	).toLocaleString();

	return (
		<>
			<li className="token-list-item">
				<div className="token-list-item-left">
					<Link to={`/edit-token/${tokenId}`}>
						<div className="edit-icon material-symbols-outlined">
							edit_square
						</div>
					</Link>
					<div className="token-name">{tokenName}</div>
				</div>
				<div className="token-balance">{formatedBalance}</div>
			</li>
		</>
	);
};

export default TokenItem;
