import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import Routes from './routes';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import reducers from './reducers';
import {renderRoutes} from 'react-router-config';
import axios from 'axios';

var axiosInstance = axios.create({
  baseURL: '/api'
});

//(reducers,state,middleware)
const createStoreWithMiddleware = applyMiddleware(thunk.withExtraArgument(axiosInstance))(createStore);

ReactDOM.hydrate(
	<Provider store={createStoreWithMiddleware(reducers,window.INITIAL_STATE)}>
	<BrowserRouter>
		<div>{renderRoutes(Routes)}</div>
	</BrowserRouter>
	</Provider>
	,
	document.getElementById('root')
	);