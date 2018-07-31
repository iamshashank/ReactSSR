import {combineReducers} from 'redux';

import usersReducers from './users_reducer';
import authReducer from './auth_reducer';
import adminsReducer from './admins_reducer';


export default combineReducers({
	users:usersReducers,
	auth:authReducer,
	admins:adminsReducer
});