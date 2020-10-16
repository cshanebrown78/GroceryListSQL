import { combineReducers } from 'redux';
import itemReducer from './itemReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import repeatReducer from './repeatReducer';

export default combineReducers ({
    item: itemReducer,
    error: errorReducer,
    auth: authReducer,
    repeat: repeatReducer
})