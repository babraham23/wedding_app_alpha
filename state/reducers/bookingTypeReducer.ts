export const SET_BOOKING_TYPE = 'SET_BOOKING_TYPE';

const initialState: any = {
    BookingType: ''
}

const bookingTypeReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case SET_BOOKING_TYPE:
        return Object.assign({}, state, { BookingType: action.payload })
    }
    return state
  }
  
  export default bookingTypeReducer