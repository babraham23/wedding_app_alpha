import { combineReducers } from 'redux';
import foodReducer from './foodReducer';

const appReducers = combineReducers({
    foodReducer
});

export default appReducers;