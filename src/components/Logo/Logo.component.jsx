import React from 'react';
import KleverLogo from '../../assets/logo.svg';
import './Logo.styles.scss';
import { useNavigate } from 'react-router-dom';

const Logo = () => {
	let navigate = useNavigate();
	const onClickHandler = () => {
		navigate('/');
	};

	return (
		<>
			<div className="logo-container" onClick={onClickHandler}>
				<img src={KleverLogo} alt="klever-logo" />
			</div>
		</>
	);
};

export default Logo;
