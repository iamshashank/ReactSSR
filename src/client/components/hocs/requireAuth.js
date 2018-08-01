import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

export default (ChildComponent)=>{
	class RequireAuth extends React.Component{
		render(){
			switch(this.props.auth){
				case false:
				return <Redirect to='/' />
				case null:
				return <h2>Loading !!</h2>;
				default:
				return <ChildComponent {...this.props} />
			}
		}
	}

	function mapStateToProps(state){
		return {auth:state.auth};
	}

	return connect(mapStateToProps)(RequireAuth);
}