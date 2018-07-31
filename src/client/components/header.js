import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import ButtonAppBar from './app_bar';

 class Header extends React.Component{

	// renderAuthButton(){
	// 	console.log('Auth: ',this.props.auth);
	// 	const login = (<li className="nav-item mx-md-2">
	// 		      						        <a className="nav-link" href="/api/auth/google">Login</a>
	// 		      						      	</li>);
	// 	const logout = (<li className="nav-item mx-md-2">
	// 		      						        <a className="nav-link" href="/api/logout">Logout</a>
	// 		      						      	</li>);
	// 	const inout = this.props.auth ? logout : login ;
	// 	return inout;
	// }

	// render(){
		

	// 	return (
	// 		<div>
	// 		<nav className="navbar navbar-expand-lg navbar-dark bg-primary ">
	// 		  <Link className="navbar-brand" to="/">React SSR</Link>
	// 		  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
	// 		    <span className="navbar-toggler-icon"></span>
	// 		  </button>

	// 		  <div className="collapse navbar-collapse" id="navbarSupportedContent">
	// 		    <ul className="navbar-nav ml-auto">
	// 		      <li className="nav-item active mx-md-2">
	// 		        <Link className="nav-link" to="/users">Users</Link>
	// 		      </li>
	// 		      <li className="nav-item mx-md-2">
	// 		        <Link className="nav-link" to="/admins">Admins</Link>
	// 		      </li>
	// 			{this.renderAuthButton()}
	// 		    </ul>
	// 		  </div>
	// 		</nav>
	// 		</div>
	// 		);
	// }

	render(){
		return (
			<ButtonAppBar auth={this.props.auth} />
			);
	}
}

function mapStateToProps(state){
	return {auth:state.auth};
}

export default connect(mapStateToProps)(Header);

