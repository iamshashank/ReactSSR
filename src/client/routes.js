import React from 'react';
//import { Route , Switch} from 'react-router-dom';
import HomePage from './pages/Home';
import UsersListPage from './pages/UsersList';
import AdminsListPage from './pages/admins';

import App from './components/app';
import NotFoundPage from './pages/not_found';


// export default ()=>{
// 	return (
// 		<div>
// 		<Switch>
// 		<Route exact path="/users" component={UsersList} />
// 		<Route exact path="/" component={Home} />
// 		</Switch>
// 		</div>
// 		);
// }

export default [
{
	//route nesting
	...App,
	routes:[
		{
			path:'/',
			//component:HomePage.component,
			//spread in js 'merging'
			...HomePage, 
			exact:true
		},
		{
			path:'/users',
			...UsersListPage
		},
		{
			path:'/admins',
			...AdminsListPage
		},
		{
			...NotFoundPage
		}
	]
}
];