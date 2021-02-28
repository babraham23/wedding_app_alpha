export const ADD_TO_BASKET = 'ADD_TO_BASKET'
export const REMOVE_FROM_BASKET = 'REMOVE_FROM_BASKET'

const initialState: any = {
    Basket: ''
}

const basketItemsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_TO_BASKET:
      return Object.assign({}, state, { Basket: action.payload })
    case REMOVE_FROM_BASKET:
      return state.filter((cartItem: any) => cartItem.Id !== action.payload.Id)
  }
  return state
}

export default basketItemsReducer