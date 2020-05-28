import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';

/*Redux Imports*/
import {Provider,connect} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {getUserInput} from './redux/reducers.js';

//Redux logger:
import {createLogger} from 'redux-logger';

// create logger instance:
const logger = createLogger();

const store = createStore(getUserInput,applyMiddleware(logger));

ReactDOM.render(
  <React.StrictMode>
  	<Provider store={store}>
  		<App />
  	</Provider>    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
