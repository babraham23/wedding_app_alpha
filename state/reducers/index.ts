import { combineReducers } from 'redux';
import basketReducer from './basketReducer';
import bookingTypeReducer from './bookingTypeReducer';
import locationReducer from './locationReducer';
import setClientReducer from './setClientReducer';
import toggleLoading from './toggleLoading';
import timeSlotReducer from './timeSlotReducer';
import addOnReducer from './addOnReducer';
import removeButtonReducer from './removeButtonReducer';

const appReducers = combineReducers({
    basketReducer,
    bookingTypeReducer,
    locationReducer,
    setClientReducer,
    toggleLoading,
    timeSlotReducer,
    addOnReducer,
    removeButtonReducer
});

export default appReducers;