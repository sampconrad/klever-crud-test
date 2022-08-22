import React from 'react';
import './Heading.styles.scss'

const Heading = () => {
  return (
		<>
			<div className="table-head-container">
				<div className="table-head-left">Tokens</div>
				<div className="table-head-right">Balance</div>
			</div>
		</>
	);
};

export default Heading;
