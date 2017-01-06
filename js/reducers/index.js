
import { combineReducers } from 'redux';
import userReducer from './user';
//是将应用的state进行组合
export default combineReducers({
	userStore: userReducer,
});
