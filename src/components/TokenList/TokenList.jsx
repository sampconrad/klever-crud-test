import React, { useContext } from 'react';
import './TokenList.styles.scss';
import { GlobalContext } from '../../context/GlobalState';
import TokenItem from '../TokenItem/TokenItem';

const TokenList = () => {
	const { tokens } = useContext(GlobalContext);

	return (
		<>
			<div className="token-list-container">
				<ul className="token-list-ul">
					{tokens.map((token) => (
						<TokenItem
							key={token.id}
							tokenId={token.id}
							tokenName={token.name}
							tokenBalance={token.balance}
						/>
					))}
				</ul>
			</div>
		</>
	);
};

export default TokenList;
