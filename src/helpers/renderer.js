import React from 'react';
import {renderToString} from'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import Routes from '../client/routes';
import {Provider} from 'react-redux';
import {renderRoutes} from 'react-router-config';
import serialize from 'serialize-javascript';
import JssProvider from 'react-jss/lib/JssProvider';
import {
  MuiThemeProvider,
  createMuiTheme,
  createGenerateClassName,
} from '@material-ui/core/styles';

import {Helmet} from 'react-helmet';

export default (req,store,context,theme,sheetsRegistry,generateClassName,sheetsManager)=>{
	const content = renderToString(
	<JssProvider registry={sheetsRegistry} generateClassName={generateClassName}>
      <MuiThemeProvider theme={theme} sheetsManager={sheetsManager}>
		<Provider store={store}>
		<StaticRouter location={req.path} context={context}>
			<div>{renderRoutes(Routes)}</div>
		</StaticRouter>
		</Provider>
		</MuiThemeProvider>
    </JssProvider>
		);
	// Grab the CSS from our sheetsRegistry.
  const css = sheetsRegistry.toString();
// 	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
// <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
// <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
	
	const helmet = Helmet.renderStatic();

	const html = `
	<html>
	<head>
	${helmet.title.toString()}
	${helmet.meta.toString()}
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500">
	<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
	<style id="jss-server-side">${css}</style>
	</head>
	<body>
	<div id="root">${content}</div>
	<script>
		window.INITIAL_STATE = ${serialize(store.getState())}
	</script>
	<script src="bundle.js"></script>
	</body>
	</html>
	`;

	return html;
};