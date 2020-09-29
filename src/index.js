import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


import { Provider } from 'react-redux';

import { createStore, combineReducers } from 'redux';
//                          ^
import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';

const rootReducer = combineReducers({
    ctr: counterReducer, // state.ctr.counter
    res: resultReducer, // state.res.result
})


const store = createStore(rootReducer);  //takes reducer as imput

ReactDOM.render( <Provider store={store} ><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
