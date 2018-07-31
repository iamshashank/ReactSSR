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
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';

var axiosInstance = axios.create({
  baseURL: '/api'
});

//(reducers,state,middleware)
const createStoreWithMiddleware = applyMiddleware(thunk.withExtraArgument(axiosInstance))(createStore);
// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: green,
    accent: red,
    type: 'light',
  },
});

ReactDOM.hydrate(
	<MuiThemeProvider theme={theme}>
	<Provider store={createStoreWithMiddleware(reducers,window.INITIAL_STATE)}>
	<BrowserRouter>
		<div>{renderRoutes(Routes)}</div>
	</BrowserRouter>
	</Provider>
	</MuiThemeProvider>
	,
	document.getElementById('root')
	);