import React from 'react';
import {connect} from 'react-redux';
import {fetchAdmins} from '../actions';
import UserGrid from '../components/user_grid'; 


class AdminsListPage extends React.Component{


	componentDidMount(){
		this.props.fetchAdmins();
	}

  renderList(admins){
      return users.map((admin)=>{
        return  (<li key={user.id}>{user.name}</li>);
      });
  }
// <UserGrid users={this.props.users} />
	render(){
		return (
			<div>
			<h3>List Of Users:</h3>
				<UserGrid users={this.props.admins} />
			</div>
			);
	}
}

function mapStateToProps(state){
	return {
		admins:state.admins
	};
}


export function loadData(store){
	
	return store.dispatch(fetchAdmins());
}

export default {
	loadData,
	component: connect(mapStateToProps,{fetchAdmins})(AdminsListPage)

};