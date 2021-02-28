export const SET_TIME_SLOT = 'SET_TIME_SLOT';

const initialState: any = {
	timeSlot: '',
};

const timeSlotReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case SET_TIME_SLOT:
			return Object.assign({}, state, { timeSlot: action.payload });
	}
	return state;
};

export default timeSlotReducer;
