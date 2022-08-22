import React, { createContext, useReducer, useEffect } from 'react';
import { AppReducer } from './AppReducer';

const initialState = {
	tokens: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(
		AppReducer,
		initialState,
		(initialValue = initialState) =>
			JSON.parse(localStorage.getItem('localCart')) || initialValue
	);

	useEffect(() => {
		localStorage.setItem('localCart', JSON.stringify(state));
	}, [state]);

	// ADD TOKEN
	const addToken = (token) => {
		dispatch({
			type: 'ADD_TOKEN',
			payload: token,
		});
	};

	// EDIT TOKEN
	const editToken = (token) => {
		dispatch({
			type: 'EDIT_TOKEN',
			payload: token,
		});
	};

	// REMOVE TOKEN
	const removeToken = (id) => {
		dispatch({
			type: 'REMOVE_TOKEN',
			payload: id,
		});
	};

	return (
		<GlobalContext.Provider
			value={{
				tokens: state.tokens,
				removeToken,
				addToken,
				editToken,
			}}>
			{children}
		</GlobalContext.Provider>
	);
};
