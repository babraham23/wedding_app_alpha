export const SET_HAS_ORDERED = 'SET_HAS_ORDERED';

const initialState: any = {
    hasOrdered: false
}

const foodReducer = (state = initialState, action: any) => {
    switch(action.type) {
        case SET_HAS_ORDERED:
            return Object.assign({}, state, { hasOrdered: action.payload } );
    }
    return state
}

export default foodReducer