import { combineReducers } from 'redux';
import foodReducer from './foodReducer';
import userReducer from './userReducer';

const appReducers = combineReducers({
    foodReducer,
    userReducer
});

export default appReducers;