export const TOGGLE_LOADING = 'TOGGLE_LOADING';

const initialState: any = {
    loading: false
}

const toggleLoading = (state = initialState, action: any) => {
    switch (action.type) {
      case TOGGLE_LOADING:
        return Object.assign({}, state, {loading: action.loading})
    }
    return state
  }
  
export default toggleLoading