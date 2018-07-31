import React from 'react';

class Home extends React.Component{

	render(){
		return (
			<div>
				<button onClick={()=>{console.log("Yo!")}}>Click me</button>
			</div>
			);
	}
}
//test

export default {
	component:Home
}
