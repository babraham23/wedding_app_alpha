export const TOGGLE_REMOVE_BUTTON = 'TOGGLE_REMOVE_BUTTON'

const initialState: any = {
    showRemoveButton: false
}

const removeButtonReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case TOGGLE_REMOVE_BUTTON:
      return Object.assign({}, state, { showRemoveButton: action.payload })
  }
  return state
}

export default removeButtonReducer