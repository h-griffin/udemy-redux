import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


import { Provider } from 'react-redux';

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
//                          ^
import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    ctr: counterReducer, // state.ctr.counter
    res: resultReducer, // state.res.result
})

//middleware
const logger = store => {
    return next => {
        return action => {
            console.log('[middleware] dispatching,', action);
            const result = next(action);   //goes to reducer, needs action
            console.log('[middleware] next state', store.getState());
            return result;
        }
    }
}


// chrome dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)));  //takes reducer as imput

ReactDOM.render( <Provider store={store} ><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
