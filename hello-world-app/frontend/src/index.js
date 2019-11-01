import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import AppContainer from './AppContainer';
import reducer from './state';

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}><AppContainer /></Provider>, document.getElementById('root'));
