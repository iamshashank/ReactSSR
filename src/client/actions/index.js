
//import axios from 'axios';

const ROOT = "http://react-ssr-api.herokuapp.com";
export const FETCH_USERS ="fetch_users";
export const FETCH_CURRENT_USERS = "fetch_current_user";
export const FETCH_ADMINS = "fetch_admins";


export const fetchUsers = ()=>{
	return async (dispatch, getState, axiosInstance) =>{
	const res = await axiosInstance.get(`/users`);
	return dispatch({
		type:FETCH_USERS,
		payload:res
	});
}
};

export const fetchCurrentUser = ()=>{
	return async (dispatch,getState,axiosInstance)=>{
		const res = await axiosInstance.get('/current_user');
		//console.log(res.data);
		return dispatch({
			type:FETCH_CURRENT_USERS,
			payload:res
		});
	}
};

export const fetchAdmins = ()=>{
	return async (dispatch,getState,axiosInstance)=>{
		const res = await axiosInstance.get('/admins');
		//console.log(res.data);
		return dispatch({
			type:FETCH_ADMINS,
			payload:res
		});
	}
};

