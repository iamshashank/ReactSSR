import React from 'react';
import {renderRoutes} from 'react-router-config';
import Header from './header';
import {fetchCurrentUser} from '../actions';


class App extends React.Component{

	

	render(){
		return (
			<div>
			<div>
			<Header />
			</div>
			{renderRoutes(this.props.route.routes)}
			</div>
			);
	}
}

export default {
	component: App,
	loadData: ({dispatch})=>dispatch(fetchCurrentUser())
};