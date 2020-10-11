export const actions = {
	SET_NAV: 'SET_NAV',
};

export const initialState = {
	activeNavLink: 'home',
};

export const navReducer = (state = initialState, action) => {
	switch (action.type) {
		case actions.SET_NAV:
			return {
				...state,
				activeNavLink: action.payload,
			};

		default:
			return state;
	}
};
