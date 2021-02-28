export const SET_CLIENT = 'SET_CLIENT';

const initialState: any = []

const setClientReducer = (state = initialState, action: any) => {
    switch(action.type) {
        case SET_CLIENT:
            return [...state, action.payload]
    }
    return state
}

export default setClientReducer