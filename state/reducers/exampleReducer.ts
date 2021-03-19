export const ADD_STARTER = 'ADD_STARTER';
export const ADD_MAIN = 'ADD_MAIN';
export const ADD_DESSERT = 'ADD_DESSERT';

const initialState: any = {
    Starter: '',
    Main: '',
    Dessert: ''
}

const foodReducer = (state = initialState, action: any) => {
    switch(action.type) { 
        case ADD_STARTER:
            return Object.assign({}, state, { Starter: action.payload });
        case ADD_MAIN:
            return Object.assign({}, state, { Main: action.payload });
        case ADD_DESSERT:
            return Object.assign({}, state, { Dessert: action.payload });
    }
    return state;
}

export default foodReducer;