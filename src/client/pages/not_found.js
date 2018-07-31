import React from 'react';

const NotFoundPage = (props)=>{
	if(props.staticContext){
		props.staticContext.notFound = true;
	}
	return (
		<h1>LOL!! Page not found</h1>
		);
}

export default {component:NotFoundPage};