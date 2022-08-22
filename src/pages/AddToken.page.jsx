import React, { useState, useContext } from 'react';
import './AddToken.styles.scss';
import { Link, useNavigate } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';
import Form from '../components/Form/Form.component';
import Swal from 'sweetalert2';

const AddToken = () => {
	const [name, setName] = useState('');
	const [balance, setBalance] = useState('');
	const { addToken } = useContext(GlobalContext);

	let navigate = useNavigate();

	const Toast = Swal.mixin({
		toast: true,
		position: 'top-end',
		showConfirmButton: false,
		timer: 3000,
		timerProgressBar: true,
		didOpen: (toast) => {
			toast.addEventListener('mouseenter', Swal.stopTimer);
			toast.addEventListener('mouseleave', Swal.resumeTimer);
		},
	});

	const onSubmit = (e) => {
		e.preventDefault();
		const newToken = {
			name,
			balance,
			id: name,
		};
		if (!name || !balance) {
			Toast.fire({
				icon: 'error',
				iconColor: '#ff6363',
				title: 'Please, fill out the form.',
			});
		} else {
			Toast.fire({
				icon: 'success',
				iconColor: '#55d98d',
				title: 'Token added to wallet!',
			});
			addToken(newToken);
			navigate('/');
		}
	};

	const onChangeName = (e) => {
		setName(e.target.value);
	};

	const onChangeBalance = (e) => {
		setBalance(e.target.value);
	};

	return (
		<div className="add-container">
			<div className="heading">
				<h2>Add Token</h2>
				<Link to="/">
					<button className="btn-grey">Voltar</button>
				</Link>
			</div>
			<form className="form-container" action="/" onSubmit={onSubmit}>
				<Form
					Label={'Token'}
					Type={'text'}
					Name={'name'}
					Value={name}
					OnChange={onChangeName}
					Placeholder={'BTC'}
				/>
				<Form
					Label={'Balance'}
					Type={'number'}
					Name={'balance'}
					Value={balance}
					OnChange={onChangeBalance}
					Placeholder={'2,500.00'}
				/>
				<div className="btn-container-add">
					<button type="submit" className="btn-purple">
						Save
					</button>
				</div>
			</form>
		</div>
	);
};

export default AddToken;
