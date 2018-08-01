// const express = require('express');
// const React = require('react');
// const {renderToString} = require('react-dom/server');
// const Home = require('./client/components/Home');
import 'babel-polyfill';
import express from 'express';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';
import {matchRoutes} from 'react-router-config';
import Routes from './client/routes';
import proxy from 'express-http-proxy';
import { SheetsRegistry } from 'react-jss/lib/jss';
import {
  MuiThemeProvider,
  createMuiTheme,
  createGenerateClassName,
} from '@material-ui/core/styles'
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';


const app = express();

app.use('/api',proxy('http://react-ssr-api.herokuapp.com', {
	proxyReqOptDecorator(opts) {
		opts.headers['x-forwarded-host'] = 'localhost:3000';
		return opts;
	}
}));
app.use(express.static('public'));



app.get("*",(req,res)=>{
  const sheetsRegistry = new SheetsRegistry();

  // Create a sheetsManager instance.
  const sheetsManager = new Map();

  // Create a theme instance.
  const theme = createMuiTheme({
    palette: {
      primary: green,
      accent: red,
      type: 'light',
    },
  });

  // Create a new class name generator.
  const generateClassName = createGenerateClassName();

	const store = createStore(req);
	//load data into store

	//matchRoute() return a object
	const promises = matchRoutes(Routes , req.path).map(({route})=>{
		//if loaddata exist then call it
		//not all Component has loadData() 
		return route.loadData ? route.loadData(store):null;
	}).map((promise)=>{
		if(promise){
			return new Promise((resolve,reject)=>{
				promise.then(resolve).catch(resolve);
			});
		}
	});

	//this is for redirect <Redirect /> handeling on ssr

	//console.log(promises);
	Promise.all(promises).then(()=>{
		const context ={};
		const content = renderer(req,store,context,theme,sheetsRegistry,generateClassName,sheetsManager);
		if(context.url){
			return res.redirect(301,context.url);
		}
		if(context.notFound)
			res.status(404);
		res.send(content);
	});
	//after loading we render
	
});

app.listen(3000,()=>{
	console.log("SERVER STARTED AT PORT: 3000");
});