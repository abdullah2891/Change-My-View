import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RouteCollection from './routes';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom'; 




ReactDOM.render(
	<BrowserRouter>
		<RouteCollection />
	</BrowserRouter>
	, document.getElementById('root'));
registerServiceWorker();
