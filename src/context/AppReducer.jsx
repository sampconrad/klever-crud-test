/* eslint-disable import/no-anonymous-default-export */
export default (state, action) => {
	switch (action.type) {
		// ADD TOKEN CASE
		case 'ADD_TOKEN':
			return {
				...state,
				tokens: [action.payload, ...state.tokens],
			};

		// EDIT TOKEN CASE
		case 'EDIT_TOKEN':
			const updateToken = action.payload;

			const updateTokens = state.tokens.map((token) => {
				if (token.id === updateToken.id) {
					return updateToken;
				}
				return token;
			});
			return {
				...state,
				tokens: updateTokens,
			};

		// REMOVE TOKEN CASE
		case 'REMOVE_TOKEN':
			return {
				...state,
				tokens: state.tokens.filter((token) => {
					return token.id !== action.payload;
				}),
			};

		default:
			return state;
	}
};
