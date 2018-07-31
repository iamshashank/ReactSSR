import React from 'react';
import {connect} from 'react-redux';
import {fetchUsers} from '../actions';
import UserGrid from '../components/user_grid'; 


class UsersList extends React.Component{


	componentDidMount(){
		this.props.fetchUsers();
	}

  renderList(users){
      return users.map((user)=>{
        return  (<li key={user.id}>{user.name}</li>);
      });
  }
// <UserGrid users={this.props.users} />
	render(){
		return (
			<div>
			<h3>List Of Users:</h3>
				<UserGrid users={this.props.users} />
			</div>
			);
	}
}

function mapStateToProps(state){
	return {
		users:state.users
	};
}


export function loadData(store){
	
	return store.dispatch(fetchUsers());
}

export default {
	loadData,
	component: connect(mapStateToProps,{fetchUsers})(UsersList)

};