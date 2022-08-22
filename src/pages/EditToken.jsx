import React, { useState, useEffect, useContext } from 'react';
import './EditToken.styles.scss';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';

import Swal from 'sweetalert2';
import Form from '../components/Form/Form';

const EditToken = () => {
	const { tokens, editToken, removeToken } = useContext(GlobalContext);
	const [selectedToken, setSelectedToken] = useState({
		id: '',
		name: '',
		balance: '',
	});

	const Toast = Swal.mixin({
		toast: true,
		position: 'top-end',
		showConfirmButton: false,
		timer: 3000,
		iconColor: '#ff6363',
		timerProgressBar: true,
		didOpen: (toast) => {
			toast.addEventListener('mouseenter', Swal.stopTimer);
			toast.addEventListener('mouseleave', Swal.resumeTimer);
		},
	});

	let navigate = useNavigate();

	const { id } = useParams();
	const tokenId = id;

	useEffect(() => {
		const selectedToken = tokens.find((token) => token.id === tokenId);
		setSelectedToken(selectedToken);
	}, [tokenId, tokens]);

	const onSubmitHandler = (e) => {
		e.preventDefault();
		Toast.fire({
			icon: 'success',
			iconColor: '#55d98d',
			title: 'Token changes saved.',
		});
		editToken(selectedToken);
		navigate('/');
	};

	const onChangeHandler = (e) => {
		setSelectedToken({ ...selectedToken, [e.target.name]: e.target.value });
	};

	const onClickHandler = (e) => {
		e.preventDefault();
		Swal.fire({
			title: 'Remove token?',
			text: 'This action cannot be undone!',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#6cff6c',
			confirmButtonText: 'Yes',
			cancelButtonColor: '#ff6363',
			cancelButtonText: 'Cancel',
		}).then((result) => {
			if (result.isConfirmed) {
				Toast.fire({
					icon: 'error',
					title: 'Token removed from wallet.',
				});
				removeToken(selectedToken.id);
				navigate('/');
			}
		});
	};

	return (
		<>
			<div className="add-container">
				<div className="heading">
					<h2>Edit Token</h2>
					<Link to="/">
						<button className="btn-grey">Voltar</button>
					</Link>
				</div>
				<form className="form-container" action="/" onSubmit={onSubmitHandler}>
					<Form
						Label={'Token'}
						Type={'text'}
						Name={'name'}
						Value={selectedToken.name}
						OnChange={onChangeHandler}
					/>
					<Form
						Label={'Balance'}
						Type={'number'}
						Name={'balance'}
						Value={selectedToken.balance}
						OnChange={onChangeHandler}
					/>
					<div className="btn-container">
						<button type="button" className="btn-red" onClick={onClickHandler}>
							Remove
						</button>
						<button type="submit" className="btn-purple">
							Save
						</button>
					</div>
				</form>
			</div>
		</>
	);
};

export default EditToken;
