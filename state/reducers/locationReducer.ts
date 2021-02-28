export const SET_LOCATION = 'SET_LOCATION';

const initialState: any = {
    locationDetails: ''
}

const locationReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case SET_LOCATION:
        return Object.assign({}, state, { locationDetails: action.payload })
    }
    return state
  }
  
  export default locationReducer